// routes/destination.js
const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// ... (other routes)

// Add a review to a destination
router.post('/:destinationId/reviews', destinationController.addReview);
router.get('/search', destinationController.searchDestinations); // Update the route to use searchDestination

// ... (other routes)

module.exports = router;
