const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection string (you can uncomment the dotenv line for dynamic loading)
const conn_string = process.env.MONGODB_CONN_STRING

async function mongoConnection() {
  // Connect to MongoDB using mongoose with the connection string
  await mongoose.connect(conn_string, { useNewUrlParser: true, useUnifiedTopology: true });
  
  // Log success message upon successful connection
  console.log("mongodb connected successfully...");
}

// Export the connection function to use in other parts of the app
module.exports = { mongoConnection };
