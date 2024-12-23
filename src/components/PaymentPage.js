import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './PaymentPage.css';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("DebitCard");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    nameOnCard: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    agreeToTerms: false,
    Amount: "",  // Added Amount to formData
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    alert("Payment submitted successfully! Consult With Doctor");
    navigate("/chatbot"); // Replace "/chatbot" with the actual route of your chatbot
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === "UPI") {
      navigate("/upi"); // Navigate to the UPI page
    }
  };

  return (
    <div className="payment-form-container">
      <h1 className="form-title">Payment Form Widget</h1>
      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <button
            className={paymentMethod === "DebitCard" ? "active" : ""}
            onClick={() => handlePaymentMethodChange("DebitCard")}
          >
            Debit Card
          </button>
          <button
            className={paymentMethod === "UPI" ? "active" : ""}
            onClick={() => handlePaymentMethodChange("UPI")}
          >
            UPI
          </button>
        </div>
      </div>

      {paymentMethod === "DebitCard" && (
        <form className="payment-form" onSubmit={handleSubmit}>
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <h3>Debit Card Info</h3>
          <div className="form-group">
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              maxLength="16"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                name="Amount"
                value={formData.Amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Expiration</label>
              <input
                type="text"
                name="expiration"
                value={formData.expiration}
                onChange={handleInputChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label>CVV Number</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                maxLength="3"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="terms-checkbox">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />
              By checking this box, I agree to the Terms & Conditions & Privacy Policy.
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default PaymentPage;
