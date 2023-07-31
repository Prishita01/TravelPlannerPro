const mongoose = require('mongoose');

// Define the schema for the 'Destination'
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add more fields as needed, e.g., images, attractions, weather data, etc.
  images: [{ type: String }], // An array of image URLs for the destination
  attractions: [{ type: String }], // An array of attraction names
  weatherData: {
    // Weather data object
    temperature: Number,
    condition: String,
    // Add more weather-related fields as needed
  },
});

// Create the 'Destination' model
const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
