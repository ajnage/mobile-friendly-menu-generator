const RevenueStats = require("../models/revenueStats");

module.exports = {
	getRevenueStats: async (req, res) => {
		try {
			const restaurantId = req.params.restaurantId;
			const revenueStats = await RevenueStats.find({
				restaurant: restaurantId,
			}).populate("restaurant");

			res.status(200).send(revenueStats);
		} catch (err) {
			console.log(err);
			res.status(500).send("Internal Server Error");
		}
	},
	createRevenueStats: async (req, res) => {
		try {
			const newRevenueStats = await RevenueStats.create({
				month: req.body.month,
				revenue: req.body.revenue,
				description: req.body.description,
				restaurant: req.params.restaurantId,
			});

			res.status(200).send(newRevenueStats);
		} catch (err) {
			console.log(err);
			res.status(500).send("Internal Server Error");
		}
	},
	updateRevenueStats: async (req, res) => {
		try {
			const revenueStatsId = req.params.revenueStatsId;
			const { month, revenue, description } = req.body;
			const updatedRevenueStats = await RevenueStats.findByIdAndUpdate(
				revenueStatsId,
				{ month, revenue, description },
				{ new: true }
			);

			if (!updatedRevenueStats)
				return res.status(404).send("stats not found");

			res.status(200).send(updatedRevenueStats);
		} catch (err) {
			console.log(err);
			res.status(500).send("Internal Server Error");
		}
	},
};
