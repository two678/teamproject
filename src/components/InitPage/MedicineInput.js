import React, { useState, useCallback } from 'react';
import styled from "styled-components";

const InputContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: #eddbc7;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
`;

const InputForm = styled.div`
  height: 85px;

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .inputArea {
    display: flex;
    input {
      width: 80%;
      height: 30px;
      
      border: none;
      border-bottom: 1px solid #b99b6b;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    button {
      width: 20%;
      
      border: none;
      border-bottom: 1px solid #b99b6b;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      
      color: #fff;
      background-color: #6096b4;
      font-weight: 600;
    }
  }
`;

const DataWrapper = styled.div`
  width: 100%;
  height: 215px;
  overflow: scroll;
  
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemWrapper = styled.div`
  font-size: 1.3rem;
  height: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bdcdd6;
  
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  
  .itemName {
    margin-left: 10px;
  }
  button {
    height: 100%;
    border: none;
    background-color: #aa5656;
    color: #fff;
    font-weight: 600;
    
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;


const MedicineInput = ({title}) => {
   const [tempStore, setTempStore] = useState([]);    //약들이 저장되는 곳
   const [medicine, setMedicine] = useState('');      //약을 입력할때 저장

   const handleMedicine = useCallback((e) => {        //현재 어떤 약을 가리키고 있는지 나타낸다.
      setMedicine(e.target.value);
   }, []);

   const onClickAdd = useCallback(() => {             //약을 배열에 추가함
      setTempStore((state) => [...state, medicine]);
      setMedicine('');
   },[medicine]);

   const onRemove = useCallback((i) => {              //배열에서 약을 제거
      let temp = [...tempStore];
      setTempStore(temp.filter((v, index) => i !== index));
   }, [tempStore]);

   return (
      <InputContainer>
         <InputForm>                                {/*약을 입력*/}
            <div className='title'>{title}</div>
            <div className='inputArea'>
               <input type="text" value={medicine} onChange={handleMedicine}/>
               <button onClick={onClickAdd}>Add</button>
            </div>
         </InputForm>

         <DataWrapper>                               {/*입력한 약들을 보여줌*/}
            {tempStore.map((v,i) => (
               <ItemWrapper>                         {/*약별로 보여주면서 제거 버튼*/}
                  <div className='itemName'>{v}</div>
                  <button onClick={()=>onRemove(i)}>delete</button>
               </ItemWrapper>
            ))}
         </DataWrapper>
      </InputContainer>
   );
};

export default MedicineInput;