
const express = require('express');
const router = express.Router();
const axios = require('axios');
const destinationController = require('../controllers/destinationController')

// Search endpoint to handle destination search
router.get('/search', async (req, res) => {
  const { searchQuery } = req.query;
  try {
    // Replace 'YOUR_MAPBOX_API_KEY' with your actual Mapbox API key
    const apiKey = 'pk.eyJ1IjoicHJpc2hpdGEtZ2siLCJhIjoiY2xrcWd0N2plMm14MzNka2dmaXR4eWFoZSJ9._cZ-QYP9hOEtnv1QmmZ5ug';
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json`,
      {
        params: {
          access_token: apiKey,
          limit: 5, // You can adjust this value to control the number of results
        },
      }
    );

    // Extract relevant data from the API response and send it to the front-end
    const destinations = response.data.features.map((feature) => ({
      name: feature.text,
      latitude: feature.center[1],
      longitude: feature.center[0],
      // You can add more properties as needed (e.g., city, country, etc.)
    }));

    res.json(destinations);
  } catch (error) {
    console.error('Error during destination search:', error);
    res.status(500).json({ message: 'An error occurred during destination search.' });
  }
});


router.post('/add', destinationController.addDestination);

module.exports = router;
