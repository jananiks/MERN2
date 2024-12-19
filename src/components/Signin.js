import React, { useState } from 'react';


function Signin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);
    alert(`Welcome, ${name}`);
  };

  return (
    <div className="login-container">
      

      {/* Login Form */}
      <div className="form-section">
        <div className="welcome-text">
          <h2>Welcome back!</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            SIGN IN
          </button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="#signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;