const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Update the connection string to use your MongoDB Atlas connection string
    const connectionString = 'mongodb+srv://prishidb:prishigkp2@travelplannerpro.xr4xxsb.mongodb.net/?retryWrites=true&w=majority';

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
