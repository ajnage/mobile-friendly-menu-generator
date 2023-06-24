const User = require("../models/user");
const axios = require("axios");

module.exports = {
  getUser: async (req, res, next) => {
    console.log("anything");
    const options = {
      method: "POST",
      url: `${process.env.AUTH_DOMAIN}/oauth/token`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_API_ID,
        client_secret: process.env.CLIENT_API_SECRET,
        audience: `${process.env.AUTH_DOMAIN}/api/v2/`,
      }),
    };

    const access_token = await axios
      .request(options)
      .then(function (response) {
        return response.data.access_token;
      })
      .catch(function (error) {
        console.error(error);
      });

    try {
      const response = await axios.get(
        `${process.env.AUTH_DOMAIN}/api/v2/users/${req.auth.sub}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      const userProfile = response.data;
      const { email } = userProfile;

      let user = await User.findOne({ email });

      if (user) {
        req.user = user;
        return next();
      }

      user = await User.create({ email });
      req.user = user;

      next();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
