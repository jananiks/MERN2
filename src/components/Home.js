import React from "react";
import { IonIcon } from 'react-ion-icon';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Home(){
  const navigate = useNavigate();
  const dietitian=()=>{
    navigate("/dietitian")

  }
  const dietplan=()=>{
    navigate("/dietplan")

  }
  const track=()=>{
    navigate("/track")
  }
  return(
    <div >
    
 
    
    <div className="intro">
    
      <p>MEALMATE<br/>
      BITE INTO WELLNESS...</p>
    </div>
    <div className="intro-details">
    <p><img className="bg-pt" alt="pt" src="\images\Vector.png"/> Proper diet tracking</p><br/>
    <p><img className="bg-pt" alt="pt" src="\images\Vector.png"/> Medical reminder assistance</p><br/>
    <p><img className="bg-pt" alt="pt" src="\images\Vector.png"/> Accurate activity tracking</p>
    </div>
    <div className="grid">
      <p className="grid-intro">Eating a wide variety of healthy foods helps to keep you in good health and protects you against chronic disease. </p>
      
    <div className="imgss">
      <div className="img-grid">
        <img className="diet" alt="dietplan" src="\images\dietplan.png" onClick={dietplan}/><br/>
        <p>DIET PLAN</p>
      </div>
      
      <div className="img-grid">
        <img className="track" alt="track" src="\images\track.png" /><br/>
        <p>TRACK PROGRESS</p>
      </div>
      
      <div className="img-grid">
        <img className="dietitian" alt="dietitan" src="\images\dietitan.png" onClick={dietitian}/><br/>
        <p>DIETITIANS</p>
      </div>
      </div>  
    </div>
    
    <footer >
      {/* Social Icons */}
      <ul className="social_icon">
        <li><a href="#"><IonIcon name="logo-facebook" /></a></li>
        <li><a href="#"><IonIcon name="logo-twitter" /></a></li>
        <li><a href="#"><IonIcon name="logo-linkedin" /></a></li>
        <li><a href="#"><IonIcon name="logo-instagram" /></a></li>
      </ul>

      {/* Navigation Menu */}
      <ul className="menu">
      <li><Link className="nav-link" to="/home">Home</Link></li>
      <li><Link className="nav-link" to="/about">About</Link></li>
      <li><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>

      {/* Copyright */}
      <p className="copyright">&copy; 2024 MEALMATE. All Rights Reserved.</p>
      

    </footer>
    </div>
);
};
export default Home;