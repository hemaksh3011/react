import React, { useState } from 'react';
import { theaterData } from './theaterData';
import './Theater.css';

function TheaterSelector() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = Object.keys(theaterData);
  const states = selectedCountry ? Object.keys(theaterData[selectedCountry]) : [];
  const cities = selectedState ? Object.keys(theaterData[selectedCountry][selectedState]) : [];
  const theaters = selectedCity ? theaterData[selectedCountry][selectedState][selectedCity] : [];

  return (
    <div className="location-selector">
      <h3>Select Location</h3>
      
      <select onChange={(e) => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
      }}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>

      {selectedCountry && (
        <select onChange={(e) => {
          setSelectedState(e.target.value);
          setSelectedCity("");
        }}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      )}

      {selectedState && (
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      )}

      {theaters.length > 0 && (
        <div className="theater-list">
          <h4>🎬 Theaters in {selectedCity}</h4>
          <ul>
            {theaters.map((theater, index) => (
              <li key={index}>{theater}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TheaterSelector;
