import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Santhoshi from "./Santhoshi";
import Neil from "./Neil";

function Dietitian(){
    const navigate = useNavigate();
  const Dietitian1=()=>{
    navigate("/Dietitian1")

  }
  const Santhoshi=()=>{
    navigate("/Santhoshi")

  }
  const Neil=()=>{
    navigate("/Neil")

  }
  const Vali=()=>{
    navigate("/Vali")

  }
  const Mohan=()=>{
    navigate("/Mohan")

  }
  const Anu=()=>{
    navigate("/Anu")

  }


    
    
    return (
        <div className="d-page">
        <div className="container">
            
    
        <div className="d-content">

            <h1 className="d-title">Dietitians</h1>
            
            <div className="d-grid">
            <div className="diet-grid1">
        <img className="diet-img" alt="dietitian" src="\images\alice.png" onClick={ Dietitian1

        }/><br/>
        <p>Dr.Alice</p>
      </div>
            <div className="diet-grid2">
                <img className="diet-img" alt="dietitiant" src="/images/santhoshi.png"onClick={Santhoshi

        }/> <br/>
         <p> Dr. Santhoshi</p></div>
            <div className="diet-grid3">
                <img className="diet-img" alt="dietitian" src="/images/neil.png"onClick={Neil}/>
                <br/>
                <p >Dr. Neil Khana</p>
            </div>
            <div className="diet-grid4">
                <img className="diet-img" alt="dietitian" src="/images/vali.png"onClick={Vali}/>
                <br/> <p> Dr. Vali</p></div>
            <div className="diet-grid5">
                <img className="diet-img" alt="dietitiant" src="/images/mohan.png"onClick={Mohan}
                /> <br/><p> Dr. Mohan</p></div>
            <div className="diet-grid6">
                <img className="diet-img" alt="dietitian" src="/images/anu.png"onClick={Anu}/><br/> <p>Dr. Anu Gupta</p>
            </div> 
            </div> 
        </div>      
        </div>
    
   </div>

    );

};
export default Dietitian;