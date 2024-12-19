import React from "react";
import { IonIcon } from 'react-ion-icon';
import { useNavigate } from 'react-router-dom';


const DietPlan = () => {
  const navigate = useNavigate();
  const Callback=()=>{
    navigate("/callback")
  }
  return (
    <div className="dietary-planner-page">
     

      {/* Dietary Planner */}
      <div className="planner-container">
        <h1 className="planner-title"><em>DIETARY PLANNER</em></h1>
        <div className="input-grid">
          <div>
            <label><em>AGE</em></label>
            <input type="number" placeholder="Enter Age" />
          </div>
          <div>
            <label><em>GENDER</em></label>
            <input type="text" placeholder="Enter Gender" />
          </div>
          <div>
            <label><em>HEIGHT</em></label>
            <input type="number" placeholder="Enter Height" />
          </div>
          <div>
            <label><em>SUGAR LEVEL</em></label>
            <input type="number" placeholder="Enter Sugar Level" />
          </div>
          <div>
            <label><em>WEIGHT</em></label>
            <input type="number" placeholder="Enter Weight" />
          </div>
          <div>
            <label><em>BLOOD PRESSURE</em></label>
            <input type="number" placeholder="Enter BP" />
          </div>
        </div>
        <div className="button-container">
          <button className="d-submit-btn">SUBMIT</button>
          <button className="wearables-btn" onClick={Callback}><em>CONNECT TO WEARABLES</em></button>
        </div>
      </div>
      <footer>
                  {/* Social Icons */}
                  <ul className="social_icon">
                    <li><a href="#"><IonIcon name="logo-facebook" /></a></li>
                    <li><a href="#"><IonIcon name="logo-twitter" /></a></li>
                    <li><a href="#"><IonIcon name="logo-linkedin" /></a></li>
                    <li><a href="#"><IonIcon name="logo-instagram" /></a></li>
                  </ul>
              <p>&copy; 2024 MEALMATE. All Rights Reserved.</p>
      
            </footer>
    </div>
  );
};

export default DietPlan;
