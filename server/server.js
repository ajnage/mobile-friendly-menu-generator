const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require("cors");
const restaurantsRoutes = require("./routes/restaurants");
const itemsRoutes = require("./routes/items");
const orderStatsRoutes = require("./routes/orderStats");
const revenueStatsRoutes = require("./routes/revenueStats");
const clickStatsRoutes = require("./routes/clickStats");
const authRoute = require("./routes/authRoute");

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { getUser } = require("./middleware/getUser");

// Using our .env file
require("dotenv").config({ path: "./config/.env" });

// Connecting to our DB
connectDB();

// Using CORS to avoid cross origin errors
const corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true, //access-control-allow-credentials: true
	methods: ["POST", "PUT", "GET", "DELETE", "PATCH"],
};
app.use(cors(corsOptions));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// IsAuthenticated
const checkJwt = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `${process.env.AUTH_DOMAIN}/.well-known/jwks.json`,
	}),
	audience: `${process.env.AUTH_DOMAIN}/api/v2/`,
	issuer: `${process.env.AUTH_DOMAIN}/`,
	algorithms: ["RS256"],
});

// Public Routes
app.use("/api/items/", itemsRoutes);
app.use("/api/order-stats/", orderStatsRoutes);
app.use("/api/revenue-stats/", revenueStatsRoutes);
app.use("/api/click-stats/", clickStatsRoutes);

// Private routes
app.use("/private", checkJwt, getUser);
app.use("/private", authRoute);
app.use("/private", restaurantsRoutes);

// Server
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}!`);
});
