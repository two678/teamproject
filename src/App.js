import React, {useEffect} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

import AlarmPage from "./pages/AlarmPage";
import InitPage from "./pages/InitPage";
import LandingPage from "./pages/LandingPage";
import {useReducer} from "react";

const reducer = (state, action) => {
   let newState = [];
   switch (action.type) {
      case "INIT": {
         return action.data;
      }
      case "CREATE": {
         newState = [action.data, ...state];
         break;
      }
      default:
         return state;
   }

   localStorage.setItem('info', JSON.stringify(newState));
   return newState;
};

export const SmartStateContext = React.createContext();
export const SmartDispatchContext = React.createContext();

function App() {
   const [data, distpatch] = useReducer(reducer, []);

   useEffect(() => {
      const localDate = localStorage.getItem('info');

      console.log(localDate);
   }, []);


   const onCreate = (name, gender, age) => {
      distpatch({
         type: "CREATE",
         data: {
            name,
            gender,
            age,
         },
      });
   };



   return (
      <SmartStateContext.Provider value={data}>
         <SmartDispatchContext.Provider value={{onCreate}}>
            <div className="App">
               <Routes>
                  <Route path="/randing" element={<LandingPage />}/>
                  <Route path="/" element={<InitPage />}/>
                  <Route path="/alarm" element={<AlarmPage />}/>
               </Routes>
            </div>
         </SmartDispatchContext.Provider>
      </SmartStateContext.Provider>
  );
}

export default App;
