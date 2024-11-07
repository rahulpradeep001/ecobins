import React, { useState } from 'react';
import axios from 'axios';
import './CarbonFootprintForm.css';

const PREDICT_URL = process.env.REACT_APP_PREDICT_URL || 'http://localhost:5000/predict';
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL || 'http://localhost:5000/get-token';

const CarbonFootprintForm = () => {
  const [formData, setFormData] = useState({
    transport: '',
    coal: '',
    lpg: '',
    electricity: '',
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === '' || isNaN(parseFloat(formData[key]))) {
        setError(`Please enter a valid number for ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    if (!validateForm()) return;
    setIsLoading(true);
  
    try {
      console.log('Requesting token...');
      const tokenResponse = await axios.post(TOKEN_URL);
      const token = tokenResponse.data.access_token;
      console.log('Token received');
  
      const payload = {
        fields: Object.keys(formData),
        values: [Object.values(formData).map(parseFloat)]
      };
  
      console.log('Sending prediction request with payload:', JSON.stringify(payload, null, 2));
  
      const predictionResponse = await axios.post(PREDICT_URL, payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
  
      console.log('Prediction response:', JSON.stringify(predictionResponse.data, null, 2));
      const res = JSON.stringify(predictionResponse.data.predictions[0].values[0][0], null, 2)
      setResult(res);
    } catch (error) {
      console.error('Error details:', error);
      if (error.response) {
        console.error('Server Response:', error.response.data);
        console.error('Server Status:', error.response.status);
        console.error('Server Headers:', error.response.headers);
      }
      setError(error.response?.data?.error || error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="carbon-footprint-form">
      <h2>Carbon Footprint Calculator</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)} (units):</label>
            <input
              className="form-group input"
              type="number"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <h3>Result: <span>{Math.round(result*100)/100}</span></h3>
          
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintForm;