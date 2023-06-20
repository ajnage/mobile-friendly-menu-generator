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
