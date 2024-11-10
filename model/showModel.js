const mongoose = require("mongoose");
const { model, Schema } = mongoose;

// Schema for the 'shows' collection with movie name, time slot, and seat availability
const showSchema = Schema({
  movieName: { type: String, required: true },
  timeSlot: { type: String, required: true },
  A1: Number,
  A2: Number,
  A3: Number,
  A4: Number,
  D1: Number,
  D2: Number,
});

// Model for interacting with 'shows' collection in MongoDB
const Shows = model("shows", showSchema);

// Export the Shows model
module.exports = { Shows };
