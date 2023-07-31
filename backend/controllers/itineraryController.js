const Itinerary = require('../models/Itinerary');

// ...

// Add a new itinerary
exports.addItinerary = async (req, res) => {
  const { userid, destinationid, date, activities } = req.body;

  try {
    // Create a new itinerary document
    const newItinerary = new Itinerary({
      userid,
      destinationid,
      date,
      activities,
    });

    // Save the itinerary to the database
    await newItinerary.save();

    res.status(201).json({ message: 'Itinerary added successfully.' });
  } catch (error) {
    console.error('Error adding itinerary:', error);
    res.status(500).json({ message: 'An error occurred while adding the itinerary.' });
  }
};

//module.exports = itineraryController;