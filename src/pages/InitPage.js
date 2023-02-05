import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SmartDispatchContext} from "../App";

const InitPage = () => {
   const [state, setState] = useState({
     name: "",
     gender: "",
     age: "",
  });

   const navigate = useNavigate();
   const {onCreate} = useContext(SmartDispatchContext);

  // const [medicine, setMedicine] = useState([]);
  //
  // const [unable, setUnable] = useState([]);

   const onClickJoin = () => {
      onCreate(state.name, state.gender, state.age);
      console.log(state);

      navigate('/randing');
   };

   const handleChangeState = (e) => {
      setState({
         ...state,
         [e.target.name]: e.target.value
      });
      console.log(e.target.value);
   };

   const onChangeInfo = (e) => {
      //값이 숫자인지 검사하는 정규식
      const regex = /^[0-9]+$/;
      if (regex.test(e.target.value)) {
         setState({
            ...state,
            [e.target.name]: e.target.value
         });
      }
   };


   // const onPlus = (able) => {
   //    if(able) {
   //       const eat = prompt('복용 중인 약을 입력해주세요');
   //       setMedicine([...medicine, eat]);
   //    } else {
   //       const eat = prompt('복용 불가 약을 입력해주세요');
   //       setUnable([...unable, eat]);
   //    }
   //
   // };
   //
   // const onMinus = (able) => {
   //    if(able) {
   //       const number = parseInt(prompt('어떤 약을 빼시겠습니까?'));
   //
   //       console.log(medicine[number]);
   //       const newMedi = medicine.filter((medicine) =>  medicine !== number );
   //       setMedicine(newMedi);
   //       console.log(newMedi);
   //    } else {
   //
   //    }
   // };

  return (
     <div className="InitPage">
        <div className="left">
           <div className="enter_name">
              <h4>이름</h4>
              <input
                 value={state.name}
                 onChange={handleChangeState}
                 name="name"
                 placeholder="이름을 입력해주세요"
              />
           </div>
           <div className="gender_check">
              <label htmlFor="male">남자</label>
              <input
                 type="radio"
                 name="gender"
                 value="male"
                 onChange={handleChangeState}
              />
              <label htmlFor="female">여자</label>
              <input
                 type="radio"
                 name="gender"
                 value="female"
                 onChange={handleChangeState}
              />
           </div>
           <div className="enter_age">
              <h4>나이</h4>
              <input
                 value={state.age}
                 onChange={onChangeInfo}
                 name="age"
                 placeholder="나이를 입력해주세요"
              />
           </div>
        </div>
        <div>
           <button onClick={onClickJoin}>회원 가입</button>
        </div>
        {/*<div className="right">*/}
        {/*   <div className="enter_medicine">*/}
        {/*      <h4>복용중인 약</h4>*/}
        {/*      <button onClick={()=>onPlus(true)}>*/}
        {/*         +*/}
        {/*      </button>*/}
        {/*      <button  onClick={()=>onMinus(true)}>-</button>*/}
        {/*      <ul>{medicine.map((m) => {return(`${m} , `)})}</ul>*/}
        {/*   </div>*/}
        {/*   <div className="enter_unable">*/}
        {/*      <h4>복용 불가 약</h4>*/}
        {/*      <button onClick={()=>onPlus(false)}>*/}
        {/*         +*/}
        {/*      </button>*/}
        {/*      <button  onClick={()=>alert("hello")}>-</button>*/}
        {/*      <ul>{unable.map((m) => {return(`${m} , `)})}</ul>*/}
        {/*   </div>*/}
        {/*</div>*/}
     </div>
  )
};

export default InitPage;