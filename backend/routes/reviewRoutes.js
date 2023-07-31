const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// ... (other routes)

// Add a new review
router.post('/add', reviewController.addReview);

// ... (other routes)

module.exports = router;
