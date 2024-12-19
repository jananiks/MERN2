import React from "react";



function Signup() {
  return (
    <div className="signup-container">
      
      <div className="signup-body">
        <h1 className="welcome-text">Welcome to MealMate!</h1>
        <div className="input-container">
          <input type="text" className="input-field" placeholder="Enter your name" />
          <input type="text" className="input-field" placeholder="Enter your mobile" />
          <input type="password" className="input-field" placeholder="Enter your password" />
        </div>
        <button className="signup-button">SIGN UP</button>
        <p className="signin-text">
          Already have an account? <a href="/signin" className="signin-link">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;