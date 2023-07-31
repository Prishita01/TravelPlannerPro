const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController');

// ... (other routes)

// Add a new itinerary
router.post('/add', itineraryController.addItinerary);

// ... (other routes)

module.exports = router;
