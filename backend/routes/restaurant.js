const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//Post Routes - simplified for now
router.get('/:id', restaurantController.getRestaurant);
router.post(restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);
router.post('/createRestaurant', restaurantController.createRestaurant);
module.exports = router;
