const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const restaurantsRoutes = require("./routes/restaurants");
const itemsRoutes = require("./routes/items");
const mainRoutes = require("./routes/main");
const orderStatsRoutes = require("./routes/orderStats");
const revenueStatsRoutes = require("./routes/revenueStats");
const clickStatsRoutes = require("./routes/clickStats");

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
app.use("/api/", mainRoutes);
app.use("/api/restaurants/", restaurantsRoutes);
app.use("/api/items/", itemsRoutes);
app.use("/api/order-stats/", orderStatsRoutes);
app.use("/api/revenue-stats/", revenueStatsRoutes);
app.use("/api/click-stats/", clickStatsRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}!`);
});
