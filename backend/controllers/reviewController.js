const Review = require('../models/Review');

// ...

// Add a new review
exports.addReview = async (req, res) => {
  const { destinationId, review, rating } = req.body;

  try {
    // Create a new review document
    const newReview = new Review({
      destinationId,
      review,
      rating,
    });

    // Save the review to the database
    await newReview.save();

    res.status(201).json({ message: 'Review added successfully.' });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'An error occurred while adding the review.' });
  }
};
