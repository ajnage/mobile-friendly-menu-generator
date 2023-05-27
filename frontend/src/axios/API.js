import axios from "axios";

// THE base url of production and development
const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3434/api";

const API = axios.create({
  baseURL: url,
});

// REST API
export const getRestaurants = () => API.get("/restaurants");
export const getRestaurantbyId = (id) => API.get(`/restaurants/${id}`);
export const getRevenuebyId = (id) => API.get(`/revenue-stats/${id}`);
export const getOrdersbyId = (id) => API.get(`/order-stats/${id}`);
export const getClicksbyId = (id) => API.get(`/click-stats/${id}`);
export const getItems = () => API.get(`/items`);
export const updateCategoryForm = (category) => API.get(`/items/${category}`);
