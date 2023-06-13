import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const initialLocationData = {
    location1: { lng: 0, lat: 0 },
    location2: { lng: 0, lat: 0 },
  };
  const [formData1, setFormData1] = useState(initialLocationData);
  const [formData2, setFormData2] = useState(initialLocationData);
  const [airDistance, setAirDistance] = useState(null);

  function updateFormData1(event) {
    const { name, value } = event.target;
    setFormData1({ ...formData1, [name]: value });
  }
  function updateFormData2(event) {
    const { name, value } = event.target;
    setFormData2({ ...formData2, [name]: value });
  }
  function calculateDistance(evt) {
    evt.preventDefault();
    setAirDistance(1);
  }

  return (
    <div className="App">
      <form onSubmit={calculateDistance}>
        <div>
          Location 1: <label>Longitude1:</label>
          <input
            name="lng"
            label="lng"
            placeholder="Longitude1"
            required
            onChange={updateFormData1}
            value={formData1.lng}
          />
          <label>Latitude1:</label>
          <input
            name="lat"
            label="lat"
            placeholder="Latitude1"
            required
            onChange={updateFormData1}
            value={formData1.lat}
          />
        </div>
        <div>
          Location 2: <label>Longitude2:</label>
          <input
            name="lng"
            label="lng"
            placeholder="Longitude2"
            required
            onChange={updateFormData2}
            value={formData2.lng}
          />
          <label>Latitude2:</label>
          <input
            name="lat"
            label="lat"
            placeholder="Latitude2"
            required
            onChange={updateFormData2}
            value={formData2.lat}
          />
        </div>
        <button type="submit">calculate!</button>
      </form>

      {airDistance && airDistance}
    </div>
  );
}

export default App;
