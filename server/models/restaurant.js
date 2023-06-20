const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{ timestamps: true }
);
restaurantsSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Restaurants", restaurantsSchema);
