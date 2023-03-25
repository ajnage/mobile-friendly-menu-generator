module.exports = {
	getQR: async (req, res) => {
		try {
			res.render('../views/qr.ejs');
		} catch (err) {
			console.log(err);
		}
	},
};
