const Category = require("../models/Category");

module.exports = {
    getCategory: async (req, res) => {
        try{
            const categories = await Category.find({user: req.user.id});
            let sortedCategories = categories.sort((a,b)=> (a.sequence > b.sequence ? 1:-1))
            res.render("categories.ejs", {category: sortedCategories, user: req.user});
        } catch (err) {
            console.log(err);
        }
    },
    createCategory: async (req, res) => {
        try {
            await Category.create({
                sequence: req.body.sequence,
                categoryName: req.body.categoryName,
                categoryDescription: req.body.categoryDescription,
                user: req.user.id
            })
            res.redirect("/");
        } catch (err) {
            console.log(err);
        }
    },
    deleteCategory: async (req, res) => {
        try {
            //Find category by id
            let category = await Category.findById({_id: req.params.id});
            //Delete category from db
            await Category.remove({_id: req.params.id});
            console.log("Deleted Category");
            res.redirect("/")
        } catch (err) {
            console.log("Error with deleting category")
            res.redirect("/")
        }
    }
}