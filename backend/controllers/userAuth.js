const User = require("../models/user");

module.exports = {
  register: async (req, res) => {
    try {
      const { userName, email, password } = req.body;

      const newUser = new User({ userName, email, password });

      const user = await newUser.save();

      res.status(200).send(user);
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) return res.status(404).send("user does not exist!");

      const isMatch = await user.comparePassword(password);

      if (!isMatch) return res.status(401).send("incorrect password!");

      res.status(200).send(user);
    } catch (err) {
      console.log(err);
    }
  },
};
