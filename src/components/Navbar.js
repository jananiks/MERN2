import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";


function Navbar() {
    const navigate = useNavigate();
      
      const signup=()=>{
        navigate("/signup")
      }
      const signin=()=>{
        navigate("/signin")
      }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const footerRef = useRef(null); // Create a reference for the footer

    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to footer
        }
    };

  return (
    <div className="nav">
      <img className="logo" alt="logo" src="/images/logo.png" />
      <div className="app-name">MEALMATE</div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact" onClick={scrollToFooter}>
              Contact
            </Link>
          </li>
          <li>
            <button className="btn-signin" onClick={signin}>
              SIGN IN
            </button>
          </li>
          <li>
            <button className="btn-signup" onClick={signup}>
              SIGN UP
            </button>
          </li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Navbar;
