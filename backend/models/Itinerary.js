const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  destinationid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  activities: {
    type: [String],
    required: true,
  },
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
