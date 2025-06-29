import React, { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [wantPrice, setWantPrice] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/api", {
        url,
        wantPrice,
        email,
      });
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error(error.response.data);
      // make an alert and reset the form
      alert(error.response.data);
      setUrl("");
      setWantPrice("");
      setEmail("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Price Tracker Configuration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Product URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Desired Price:</label>
          <input
            type="number"
            value={wantPrice}
            onChange={(e) => setWantPrice(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Save Configuration
        </button>
      </form>
    </div>
  );
}

export default App;
