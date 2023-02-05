import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SmartStateContext} from "../App";


const LandingPage = () => {
   const userInfo = useContext(SmartStateContext);

   const name = userInfo.name;

   console.log(userInfo);
   return (
      <div>
         <h4>이곳은 랜딩페이지입니다.</h4>
         {name}
      </div>
   )
};

export default LandingPage;
