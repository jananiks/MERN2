import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Upi.css";

const Upi = () => {
  const [upiId, setUpiId] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [amount, setAmount] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "upiId") setUpiId(value);
    if (name === "payeeName") setPayeeName(value);
    if (name === "amount") setAmount(value);
  };

  const generateQrString = () => {
    if (upiId && payeeName && amount) {
      return `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR`;
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (upiId && payeeName && amount) {
      // After successful form submission, navigate to the chatbot page
      alert("Payment successful! Navigating to the Chatbot...");
      navigate("/chatbot"); // This will navigate to the chatbot route
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="upi-container">
      <div className="form-section">
        <h2>UPI Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>UPI ID/VPA</label>
            <input
              type="text"
              name="upiId"
              value={upiId}
              onChange={handleInputChange}
              placeholder="Enter UPI ID"
            />
          </div>
          <div className="form-group">
            <label>Payee Name</label>
            <input
              type="text"
              name="payeeName"
              value={payeeName}
              onChange={handleInputChange}
              placeholder="Enter Payee Name"
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={handleInputChange}
              placeholder="Enter Amount"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="qr-section">
        {/* Optionally, you can show the QR code here */}
        {/* <QRCode value={generateQrString()} size={150} /> */}
        
      </div>
    </div>
  );
};

export default Upi;
