const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Root path handler
app.get('/', (req, res) => {
  res.send('Hello! The server is running.');
});

const API_KEY = 'QHi1wfkkWeVsEqcuFNNqXWcANb4gF-y1bviEJwXwLyZS';
const SCORING_URL = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/7c8b1c8e-f638-46c9-b161-45e7d20ebb70/predictions?version=2021-05-01";

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
app.get('/test-ibm-api', async (req, res) => {scoring_url
  try {
    console.log('Testing IBM Cloud API...');
    // Get token
    const tokenResponse = await axios.post(
      'https://iam.cloud.ibm.com/identity/token',
      `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
      }
    );
    const token = tokenResponse.data.access_token;
    console.log('Token obtained successfully');

    // Test payload
    const testPayload = {
      "input_data": [
        {
          "fields": ["transport", "coal", "lpg", "electricity"],
          "values": [[10, 20, 30, 40]]
        }
      ]
    };

    console.log('Sending test payload to IBM Cloud:', JSON.stringify(testPayload));
    const response = await axios.post(SCORING_URL, testPayload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('Received response from IBM Cloud:', JSON.stringify(response.data, null, 2));
    res.json(response.data);
  } catch (error) {
    console.error('IBM API Test Error:', error);
    if (error.response) {
      console.error('IBM Cloud API Response:', error.response.data);
      console.error('IBM Cloud API Status:', error.response.status);
    }
    res.status(500).json({ 
      error: 'Failed to test IBM API', 
      details: error.message,
      ibmCloudError: error.response ? error.response.data : 'No response from IBM Cloud'
    });
  }
});
app.post('/get-token', async (req, res) => {
  try {
    console.log('Requesting token from IBM Cloud...');
    const response = await axios.post(
      'https://iam.cloud.ibm.com/identity/token',
      `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
      }
    );
    console.log('Token received successfully');
    res.json(response.data);
  } catch (error) {
    console.error('Token Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get token', details: error.message });
  }
});

app.post('/predict', async (req, res) => {
  try {
    console.log('Received prediction request');
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      throw new Error('No token provided');
    }

    console.log('Request body:', JSON.stringify(req.body, null, 2));

    if (!req.body.fields || !req.body.values) {
      throw new Error('Invalid request body structure');
    }

    const payload = {
      "input_data": [
        {
          "fields": req.body.fields,
          "values": req.body.values
        }
      ]
    };

    console.log('Sending payload to IBM Cloud:', JSON.stringify(payload, null, 2));

    const response = await axios.post(SCORING_URL, payload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('Received response from IBM Cloud:', JSON.stringify(response.data, null, 2));
    res.json(response.data);
  } catch (error) {
    console.error('Prediction Error:', error);
    if (error.response) {
      console.error('IBM Cloud API Response:', error.response.data);
      console.error('IBM Cloud API Status:', error.response.status);
      console.error('IBM Cloud API Headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    res.status(500).json({ 
      error: 'Failed to get prediction', 
      details: error.message,
      ibmCloudError: error.response ? error.response.data : 'No response from IBM Cloud'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));