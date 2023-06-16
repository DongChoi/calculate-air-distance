import "./App.css";
import React, { useState } from "react";
import GreatCircle from "great-circle";
import "tailwindcss/tailwind.css";

function App() {
  const initialLocationData = {
    lat1: null,
    lng1: null,
    lat2: null,
    lng2: null,
    unit: "KM",
  };
  const [formData, setFormData] = useState(initialLocationData);
  const [airDistance, setAirDistance] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSpanClick(unit) {
    setFormData({ ...formData, unit: unit });
    setAirDistance(null);
  }
  function calculateDistance(evt) {
    evt.preventDefault();
    let validationCheck = true;
    try {
      for (let key in formData) {
        if (isNaN(Number(formData[key]))) {
          break;
        }
      }
    } catch (e) {
      console.log(e, "please enter a valid input");
    }
    if (validationCheck === true) {
      setErrorMsg(null);
      let airDistance = GreatCircle.distance(
        formData.lat1,
        formData.lng1,
        formData.lat2,
        formData.lng2,
        formData.unit
      );

      setAirDistance(airDistance);
    }
  }

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={calculateDistance}>
          <div className="inputs">
            Location 1:{" "}
            <input
              name="lat1"
              label="lat1"
              placeholder="Latitude1"
              required
              onChange={updateFormData}
              value={formData.lat1}
            />
            <input
              name="lng1"
              label="lng1"
              placeholder="Longitude1"
              required
              onChange={updateFormData}
              value={formData.lng1}
            />
          </div>
          <div className="inputs">
            Location 2:{" "}
            <input
              name="lat2"
              label="lat2"
              placeholder="Latitude2"
              required
              onChange={updateFormData}
              value={formData.lat2}
            />
            <input
              name="lng2"
              label="lng2"
              placeholder="Longitude2"
              required
              onChange={updateFormData}
              value={formData.lng2}
            />
          </div>
          <button type="submit">Calculate air distance</button>
        </form>
        <div className="spans">
          <span
            className={formData.unit == "KM" ? "active" : "span"}
            onClick={() => handleSpanClick("KM")}
          >
            KM
          </span>
          <br />
          <span
            className={formData.unit == "MI" ? "active" : "span"}
            onClick={() => handleSpanClick("MI")}
          >
            MI
          </span>
        </div>
      </div>
      <b>
        {airDistance &&
          `Distance: ${airDistance.toFixed(2)} ${
            formData.unit == "MI" ? "miles" : "kilometers"
          }`}

        {errorMsg && errorMsg}
      </b>
    </div>
  );
}

export default App;
