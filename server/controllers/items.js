const { Item, getCategoryEnum } = require("../models/item");

module.exports = {
  getItems: async (req, res) => {
    try {
      const allItems = await Item.find();
      res.status(200).send(allItems);
    } catch (err) {
      console.log(err);
    }
  },
  createItem: async (req, res) => {
    try {
      const data = req.body;
      const newItem = await Item.create(data);
      res.status(200).send(newItem);
    } catch (err) {
      console.log(err);
    }
  },
  updateItem: async (req, res) => {
    try {
      await Item.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
      console.log("Item details updated");
      res.status(200).send(req.body);
    } catch (err) {
      console.log(err);
    }
  },
  deleteItem: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedItem = await Item.findByIdAndDelete(id);
      res.status(200).send({
        deletedItem,
      });
      console.log(deletedItem);
    } catch (err) {
      console.log(err);
    }
  },
  getCategories: async (req, res) => {
    try {
      const category = req.params.category
      const allItemsInCategory = await Item.find({ category: category });
      res.status(200).send(allItemsInCategory);
    } catch (err) {
      console.log(err);
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const allCategories = getCategoryEnum();
      res.status(200).send(allCategories);
    } catch (err) {
      console.log(err);
    }
  }
};
