import React from "react";
import { Link } from 'react-router-dom';
function Dietitian(){
    
    
    return (
        <div className="d-page">
        <div className="container">
            
    
        <div className="d-content">

            <h1 className="d-title">Dietitians</h1>
            
            <div className="d-grid">
            <div className="diet-grid1">
                <img className="diet-img" alt="dietitian" src="/images/alice.png"/> 
                <p>Dr. Alice</p></div>
            <div className="diet-grid2">
                <img className="diet-img" alt="dietitiant" src="/images/santhoshi.png"/> <p> Dr. Santhoshi</p></div>
            <div className="diet-grid3">
                <img className="diet-img" alt="dietitian" src="/images/neil.png"/><p >Dr. Neil Khana</p>
            </div>
            <div className="diet-grid4">
                <img className="diet-img" alt="dietitian" src="/images/vali.png"/> <p> Dr. Vali</p></div>
            <div className="diet-grid5">
                <img className="diet-img" alt="dietitiant" src="/images/mohan.png"/><p> Dr. Mohan</p></div>
            <div className="diet-grid6">
                <img className="diet-img" alt="dietitian" src="/images/anu.png"/> <p>Dr. Anu Gupta</p>
            </div> 
            </div> 
        </div>      
        </div>
    
   </div>

    );

};
export default Dietitian;