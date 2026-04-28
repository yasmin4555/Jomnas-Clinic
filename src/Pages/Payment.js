
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import React, { useContext,useState } from "react";
const Payment = () => {
  const { docid } = useParams();
  const navigate = useNavigate();
  const {Doctors}=useContext(AppContext);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulate successful payment
    if (cardDetails.cardNumber && cardDetails.expiry && cardDetails.cvv && cardDetails.name) {
      alert("Payment Successful!");

      // 🟢 Save appointment in localStorage
      const newAppointment = {
        docid,
        doctorName: "Dr. John Doe",  // Replace with actual doctor data
        speciality: "Cardiologist",  // Replace with actual speciality
        address: "123 Main Street, City",  // Replace with actual address
        dateTime: "25, July, 2024 | 8:30 PM",
      };

      const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
      savedAppointments.push(newAppointment);
      localStorage.setItem("appointments", JSON.stringify(savedAppointments));

      // Redirect to My Appointments Page
      navigate("/myappointments");
    } else {
      alert("Please enter valid card details!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Pay Online - Visa</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            className="w-full p-2 border rounded"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex space-x-3">
          <div className="mb-3 w-1/2">
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              className="w-full p-2 border rounded"
              value={cardDetails.expiry}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 w-1/2">
            <label className="block text-gray-700">CVV</label>
            <input
              type="password"
              name="cvv"
              placeholder="123"
              className="w-full p-2 border rounded"
              value={cardDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-gray-700">Cardholder Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full p-2 border rounded"
            value={cardDetails.name}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary blue-600 text-white py-2 rounded hover:bg-blue-700 transition"onClick={() => navigate(`/Myappointments/doc/${docid}`)}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;