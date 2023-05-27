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

//
