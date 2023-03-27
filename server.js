require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user")
const cors = require('cors')

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://gymflow.onrender.com", "http://localhost:3000"]
  })
);

// routes
app.use("/api/workouts", workoutRoutes);
app.use('/api/user', userRoutes)

// console.log(process.env.SECRET);

// db connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected to DB & running on port 4000");
    });
  })
  .catch((err) => console.log(err));

