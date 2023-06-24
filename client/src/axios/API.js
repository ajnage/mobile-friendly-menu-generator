import axios from "axios";

// THE base url of production and development
const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3434";

const authHeader = (token) => {
  return {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
    "X-Scopes": "read:users write:users",
  };
};

const API = axios.create({
  baseURL: url,
  withCredentials: true,
});

// Restaurants API
export const getRestaurants = (token) =>
  API.get(`/private/restaurants`, { headers: authHeader(token) });
export const getRestaurantbyId = (id, token) =>
  API.get(`/api/restaurants/${id}`, {}, { headers: authHeader(token) });
export const login = (token) =>
  API.post("/private/auth", {}, { headers: authHeader(token) });

export const getRevenuebyId = (id) => API.get(`/revenue-stats/${id}`);
export const getOrdersbyId = (id) => API.get(`/order-stats/${id}`);
export const getClicksbyId = (id) => API.get(`/click-stats/${id}`);
export const getItems = () => API.get(`/items`);
export const postItems = (data) =>
  API.post(`/items/create-item`, {
    name: data.name,
    desc: data.desc,
    price: data.price,
    image: data.image,
    category: data.category,
  });
export const updateCategoryForm = (category) => API.get(`/items/${category}`);
