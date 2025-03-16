import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // State variables for form inputs
  const BASE_URL = "http://localhost:4000";
  const [formData, setFormData] = useState({
    name: "Anurag Singh",
    email: "anurag@gmail.com",
    password: "abcd",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    if (data.error) {
      setError(data.error);
    } else {
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
            }}
            required
          />
        </div>
        <p style={{ color: "red", position: "absolute", top: 0 }}>{error}</p>
        <button
          type="submit"
          style={{
            backgroundColor: isSuccess ? "green" : "#007BFF",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {isSuccess ? "Registration Successful" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
