const mongoose = require("mongoose");
require("dotenv").config();
const conn_string = process.env.MONGODB_CONN_STRING;
async function mongoConnection() {
  await mongoose.connect(
    `${conn_string}?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`
  );
  console.log("mongodb connected successfully...");
}

module.exports = { mongoConnection };
