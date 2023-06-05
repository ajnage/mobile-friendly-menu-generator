import axios from "axios";

// THE base url of production and development
const url =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:3434/api";

const API = axios.create({
	baseURL: url,
	withCredentials: true,
});

// REST API
export const getRestaurants = (email) => API.post(`/restaurants`, email);
export const getRestaurantbyId = (id) => API.get(`/restaurants/${id}`);

export const login = (token) =>
	API.post(
		"/private/auth",
		{},
		{
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${token}`,
				"X-Scopes": "read:users write:users",
			},
		}
	);
