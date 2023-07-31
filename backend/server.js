require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // You can use any port number you prefer
const authRoute = require('./routes/authRoute');
const path = require("path");
const itineraryRoute = require('./routes/itineraryRoutes');
const reviewRoute = require('./routes/reviewRoutes');

app.use(express.json());

// CORS (Cross-Origin Resource Sharing) configuration to allow requests from the front-end
app.get('/', (req, res) => {
  res.send('Server is running'); // You can modify the response message as needed
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' data:; img-src 'self' https://uploads-ssl.webflow.com http://localhost:5000; script-src 'self' http://localhost:3000;"
  );
  
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.static(path.join(__dirname, "public/assests")));
// Import the database connection function
const connectDB = require('./db');

// Connect to the MongoDB database
connectDB();

app.use(cors());
const destinationRoute = require('./routes/destinationRoutes');
app.use('/api/auth', authRoute);

app.use('/api/itinerary', itineraryRoute);
app.use('/api/review', reviewRoute);
// Import the route for destination search


// Define your route for destination search
app.use('/api/destinations', destinationRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
