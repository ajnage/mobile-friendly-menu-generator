import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { BarChart } from "../components/Charts/BarChart";
import { LineChart } from "../components/Charts/LineChart";
import "chart.js/auto";
import Container from "@mui/material/Container";
import { useAuth0 } from "@auth0/auth0-react";
import {
	getRestaurantbyId,
	getRestaurants,
	getRevenuebyId,
	getClicksbyId,
	getOrdersbyId,
} from "../axios/API";
console.log(process.env.REACT_APP_AUTH0_DOMAIN);

// Use axios to fetch the statistics from server;
// instead of using the array from dashboardstats.js

const Dashboard = () => {
	const [menusLeft, setMenusLeft] = useState(50);

	const [RevenueStats, setRevenueStats] = useState([]);
	const [OrderStats, setOrderStats] = useState([]);
	const [ClickStats, setClickStats] = useState([]);
	const { user } = useAuth0();
	const email = user && user.email;

	const restaurantId = "646eb3a8b30795e61bc2a0de";

	useEffect(() => {
		getRestaurants({ email })
			.then(function (response) {
				// handle success
				console.log(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	});

	useEffect(() => {
		getRestaurantbyId("644dfe0d152ecd497e954fcf")
			.then(function (response) {
				// handle success
				console.log("2 revenue: ", response.data[2].revenue);
				console.log("Response data.length: ", response.data.length);
				const revenues = response.data.map(
					({ revenue }) => revenue
				);
				console.log("Revenues: ", revenues);
				const upToDateData = response.data.length - 1;
				setRevenueStats(
					RevenueStats.concat(
						response.data[upToDateData].revenue
					)
				);
				console.log("Revenue Stats: ", RevenueStats);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	});

	// Get Revenue Statistics
	useEffect(() => {
		getRevenuebyId(restaurantId)
			.then(function (response) {
				// handle success
				const filteredResponse = response.data.map((revenue) => ({
					month: revenue.month,
					revenue: revenue.revenue,
					description: revenue.description,
				}));
				setRevenueStats(filteredResponse);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);

	// Get Order Statistics
	useEffect(() => {
		getOrdersbyId(restaurantId)
			.then(function (response) {
				// handle success
				const filteredResponse = response.data.map((orders) => ({
					month: orders.month,
					orders: orders.orders,
					description: orders.description,
				}));

				setOrderStats(filteredResponse);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);

	// Get Click Statistics
	useEffect(() => {
		getClicksbyId(restaurantId)
			.then(function (response) {
				// handle success
				const filteredResponse = response.data.map((clicks) => ({
					month: clicks.month,
					clicks: clicks.clicks,
					description: clicks.description,
				}));
				setClickStats(filteredResponse);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);

	const RevenueChartData = {
		labels: RevenueStats.map(({ month }) => month),
		datasets: [
			{
				label: "Revenue",
				data: RevenueStats.map(({ revenue }) => revenue),
				backgroundColor: ["#7a2c2c"],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	};

	console.log("Revenue Stats:", RevenueStats);

	console.log("Revenue Chart Data:", RevenueChartData);

	const orderChartData = {
		labels: OrderStats.map((data) => data.month),
		datasets: [
			{
				label: "Orders",
				data: OrderStats.map((data) => data.orders),
				backgroundColor: ["#7a2c2c"],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	};

	const clickChartData = {
		labels: ClickStats.map((data) => data.month),
		datasets: [
			{
				label: "Clicks",
				data: ClickStats.map((data) => data.clicks),
				backgroundColor: [
					"#7a2c2c",
					"teal",
					"white",
					"black",
					"grey",
					"darkgrey",
				],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	};

	// Here the user variable is just the username of the restaurant owner, currently it is
	// set to 'owner' before someone signs in!
	return (
		<Container
			sx={{ bgcolor: "primary.grey", width: "100vw", height: "auto" }}
		>
			<Typography
				variant="h1"
				align="center"
				color="primary.white"
				gutterBottom
				sx={{ pt: 5, pb: 5 }}
				fontWeight={"bold"}
			>
				{" "}
				{user && user.name}'s Dashboard
			</Typography>
			<Typography variant="h3" align="center" sx={{ mb: "10vh" }}>
				General Statistics
			</Typography>
			<Paper
				elevation={20}
				sx={{
					height: "45vh",
					width: "auto",
					display: "flex",
					flexDirection: "row",
					flexGrow: "4",
					flexWrap: "wrap",
					pl: "1vw",
					pr: "1vw",
					ml: "-7.5vw",
					justifyContent: "space-between",
					alignSelf: "center",
					bgcolor: "primary.verydark",
					overflow: "hidden",
					mb: "100px",
				}}
			>
				<Paper elevation={10} sx={{ height: "20vh", mt: "12vh", ml: "7vw" }}>
					<BarChart chartData={RevenueChartData} />{" "}
				</Paper>

				<Paper elevation={10} sx={{ height: "20vh", mt: "12vh" }}>
					<BarChart chartData={orderChartData} />{" "}
				</Paper>

				<Paper
					elevation={10}
					sx={{
						height: "20vh",
						mt: "12vh",
						mr: "7vw",
						width: "12vw",
					}}
				>
					<Typography
						variant="h5"
						align="center"
						sx={{ m: "10", color: "primary.verydark" }}
					>
						Menus left
					</Typography>
					<Typography
						variant="h1"
						fontWeight={"bold"}
						align="center"
						sx={{ m: "10", color: "primary.verydark" }}
					>
						{menusLeft}{" "}
					</Typography>
					<Button
						variant="contained"
						sx={{ mt: "2vh", display: "center" }}
						onClick={() => {
							setMenusLeft(menusLeft - 1);
						}}
						component={Link}
						to={"../menu_builder"}
					>
						Make Menu
					</Button>
				</Paper>
			</Paper>
			<Paper
				elevation={20}
				align="center"
				sx={{
					height: "30vh",
					width: "auto",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignContent: "space-around",
					flexWrap: "wrap",
					pl: "1vw",
					pr: "1vw",
					ml: "-7.5vw",
					bgcolor: "primary.verydark",
					overflow: "hidden",
					mb: "100px",
				}}
			>
				<Typography variant="h3" sx={{ mt: "-20" }}>
					{" "}
					Extra{" "}
				</Typography>
				<Paper
					sx={{
						my: 10,
						align: "center",
						position: "relative",
						height: "20vh",
						width: "20vw",
					}}
				>
					<LineChart
						chartData={clickChartData}
						options={{ maintainAspectRatio: false }}
					/>
				</Paper>
			</Paper>
		</Container>
	);
};

export default Dashboard;


