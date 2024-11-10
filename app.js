// Import necessary modules
const cors = require("cors"); // CORS middleware to allow cross-origin requests
const { json } = require("express"); // For parsing JSON requests (not directly used in the code)
const express = require("express"); // Express framework for building the API
require("dotenv").config(); // Load environment variables from .env file
const app = express(); // Create an instance of the express app
const { Shows } = require("./model/showModel"); // Import the 'Shows' model for interacting with MongoDB
const { mongoConnection } = require("./mongoConnection"); // Import the function to establish MongoDB connection
const PORT = process.env.PORT; // Get the port number from environment variables

//* Middleware to handle various tasks
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing) for all incoming requests
mongoConnection(); // Establish connection to MongoDB
app.use(express.json()); // Middleware to parse incoming JSON request bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data in request bodies

// POST method to create a new booking for a show
app.post("/api/booking", async (req, res) => {
  try {
    // Destructure request body to get the show details
    const { movieName, timeSlot, A1, A2, A3, A4, D1, D2 } = req.body;
    
    // Create a new entry in the 'Shows' collection in MongoDB
    const data = await Shows.create({
      movieName,
      timeSlot,
      A1,
      A2,
      A3,
      A4,
      D1,
      D2,
    });
    
    // If data is successfully created, send success response
    if (data) {
      res.status(201).json({ msg: "show booked successfully.", data: data });
    }
  } catch (error) {
    // If an error occurs, send error response with status 404
    res.status(404).send(error);
  }
});

// GET method to fetch all the bookings (shows)
app.get("/api/booking", async (req, res) => {
  try {
    // Fetch all shows from the 'Shows' collection in MongoDB
    const shows = await Shows.find({});
    
    // If shows data is found, send it as the response
    if (shows) {
      res.status(200).send(shows);
    }
  } catch (error) {
    // If an error occurs while fetching, send error response with status 404
    res.status(404).send(error);
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message indicating that the server has started successfully
  console.log(`server connected on port ${PORT}`);
});
