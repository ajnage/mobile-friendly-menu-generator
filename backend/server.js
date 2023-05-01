const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const restaurantsRoutes = require("./routes/restaurants");
const itemsRoutes = require("./routes/items");

// Using our .env file
require("dotenv").config({ path: "./config/.env" });

// Connecting to our DB
connectDB();

// Using CORS to avoid cross origin errors
app.use(cors());

// Body Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Server routes
app.use("/api/restaurants/", restaurantsRoutes);
app.use("/api/items/", itemsRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!`);
});
