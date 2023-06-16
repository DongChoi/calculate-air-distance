import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const initialLocationData = {
    lng1: null,
    lat1: null,
    lng2: null,
    lat2: null,
  };
  const [formData, setFormData] = useState(initialLocationData);
  const [airDistance, setAirDistance] = useState(null);

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function calculateDistance(evt) {
    evt.preventDefault();
    //logic...
    setAirDistance(1);
  }

  return (
    <div className="App">
      <form onSubmit={calculateDistance}>
        <div>
          Location 1:
          <input
            name="lng1"
            label="lng1"
            placeholder="Longitude1"
            required
            onChange={updateFormData}
            value={formData.lng1}
          />
          <input
            name="lat1"
            label="lat1"
            placeholder="Latitude1"
            required
            onChange={updateFormData}
            value={formData.lat1}
          />
        </div>
        <div>
          Location 2:
          <input
            name="lng2"
            label="lng2"
            placeholder="Longitude2"
            required
            onChange={updateFormData}
            value={formData.lng2}
          />
          <input
            name="lat2"
            label="lat2"
            placeholder="Latitude2"
            required
            onChange={updateFormData}
            value={formData.lat2}
          />
        </div>
        <button type="submit">calculate!</button>
      </form>

      <b>{airDistance && airDistance}</b>
    </div>
  );
}

export default App;
