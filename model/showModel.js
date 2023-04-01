const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const showSchema = Schema({
  movieName: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  A1: Number,
  A2: Number,
  A3: Number,
  A4: Number,
  D1: Number,
  D2: Number,
});

const Shows = model("shows", showSchema);
module.exports = { Shows };
