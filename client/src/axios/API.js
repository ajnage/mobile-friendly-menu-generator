import axios from "axios";

// THE base url of production and development
const url =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:3434/api";

const API = axios.create({
	baseURL: url,
	withCredentials: true,
});

// REST API
export const getRestaurants = () => API.post("/restaurants");
export const getRestaurantbyId = (id) => API.get(`/restaurants/${id}`);
export const getRevenuebyId = (id) => API.get(`/revenue-stats/${id}`);
export const getOrdersbyId = (id) => API.get(`/order-stats/${id}`);
export const getClicksbyId = (id) => API.get(`/click-stats/${id}`);
export const getItems = () => API.get(`/items`);
export const postItems = (data) => API.post(`/items/create-item`, { name: data.name, desc: data.desc, price: data.price, image: data.image, category: data.category })
export const updateCategoryForm = (category) => API.get(`/items/${category}`);

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
