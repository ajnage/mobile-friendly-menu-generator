const Items = require('../models/Items')
const cloudinary = require("../middleware/cloudinary"); 

module.exports = {
    getEdit: (req, res) => {
    const id = req.params.id;
    Items.find({}, (err, items) => {
        res.render("edit.ejs", { Items: items, idItem: id });
    });
},
    deleteTask: (req, res) => {
        const id = req.params.id;
        Items.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/profile");
        });
    },
    updateTask: async (req, res) => {
        const id = req.params.id;
        const result = await cloudinary.uploader.upload(req.file.path);
        
        await Items.findByIdAndUpdate(
            id,
            {
                sequence: req.body.sequence,
                nameoffood: req.body.nameoffood,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user.id
                // content: req.body.content
            },
            err => {
                if (err) return res.status(500).send(err);
            }
            );
        res.redirect("/profile");
    }
}