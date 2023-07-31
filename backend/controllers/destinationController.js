// Assuming you have a 'Destination' model set up using Mongoose
const Destination = require('../models/Destination');

// destinationController.js
// ...

// Add a review to a destination
exports.addReview = async (req, res) => {
  const { destinationId } = req.params;
  const { review, rating } = req.body;

  try {
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found.' });
    }

    // Create a new review object and add it to the destination's reviews array
    const newReview = {
      review,
      rating,
    };

    destination.reviews.push(newReview);

    // Save the updated destination with the new review
    await destination.save();

    res.json(destination);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'An error occurred while adding the review.' });
  }
};

const destinationController = {
  searchDestinations:async (req, res) => {
  try {
    const { keyword } = req.query;
      // Implement the logic to search for destinations based on the 'keyword' using the 'Destination' model
      // Return the search results in the response
    const regex = new RegExp(keyword, 'i');
    const searchResults = await Destination.find({ name: regex });

    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
  },

  addDestination:async (req, res) => {
  const { destinationId, name, description, images, weatherData } = req.body;
  try {
    const newDestination = new Destination({
      name,
      description,
      images,
      weatherData,
    });
    await newDestination.save();
    //res.json(newDestination);
    res.status(201).json({ message: 'Destination added successfully.' });
  } catch (error) {
    console.error('Error adding destination:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}};

module.exports = destinationController;
