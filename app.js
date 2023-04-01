const cors = require("cors");
const { json } = require("express");
const express = require("express");
require("dotenv").config();
const app = express();
const { Shows } = require("./model/showModel");
const { mongoConnection } = require("./mongoConnection");
const PORT = process.env.PORT;

//* middlewares
app.use(cors());
mongoConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// post method
app.post("/api/booking", async (req, res) => {
  try {
    const { movieName, timeSlot, A1, A2, A3, A4, D1, D2 } = req.body;
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
    if (data) {
      res.status(201).json({ msg: "show booked successfully.", data: data });
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

// get method
app.get("/api/booking", async (req, res) => {
  try {
    const shows = await Shows.find({});
    if (shows) {
      res.status(200).send(shows);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`server connected on port ${PORT}`);
});
