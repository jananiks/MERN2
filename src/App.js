import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Dietitian from "./components/Dietitian";
import Chatbot from './components/Chatbot'; // Adjust the path based on where your Chatbot component is located
import Upi from "./components/Upi";
import Santhoshi from "./components/Santhoshi";
// import chatbot from "./components/Chatbot"; // Import your ChatbotPage
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import DietPlan from "./components/Dietplan";
import Callback from "./components/Callback";
import DrAlice from "./components/DrAlice";
import PaymentPage from "./components/PaymentPage";
import Neil from "./components/Neil";
import Vali from "./components/Vali";
import Mohan from "./components/Mohan";
import Anu from "./components/Anu";







const App=()=> {
  
  return (
    
    <Router>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dietitian" element={<Dietitian />} />
        <Route path="/dietitian1" element={<DrAlice/>}/>
        <Route path="/Santhoshi" element={<Santhoshi/>}/>
        <Route path="/neil" element={<Neil/>}/>
        <Route path="Vali" element={<Vali/>}/>
        <Route path="Mohan" element={<Mohan/>}/>
        <Route path="Anu" element={<Anu/>}/>
        <Route path="/PaymentPage" element={<PaymentPage/>}/>
         <Route path="/chatbot" element={<Chatbot />}/> 
        <Route path="/dietplan" element={<DietPlan />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/Upi" element={<Upi />} />
      </Routes>
    </Router>
  );
}

export default App;
