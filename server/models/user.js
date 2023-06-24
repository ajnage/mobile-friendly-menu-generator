const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	userName: { type: String },
	email: { type: String, unique: true },
	password: { type: String },
	restaurants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Restaurants",
		},
	],
});
userSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", userSchema);
