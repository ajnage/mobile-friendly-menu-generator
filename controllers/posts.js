const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Items");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      let sortedpost = posts.sort((a,b) => (a.sequence > b.sequence ? 1:-1 ))
      res.render("profile.ejs", { posts: sortedpost, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(req.body)
      await Post.create({
        sequence: req.body.sequence,
        nameoffood: req.body.nameoffood,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id

        // title: req.body.title,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        // caption: req.body.caption,
        // likes: 0,
        // user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
