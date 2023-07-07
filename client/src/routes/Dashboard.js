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
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/esm/CardImg";
import { IoIosAddCircleOutline } from "react-icons/io";


import ViewRestaurants from "../components/dashboardRestaurants/RestaurantsView";
import AddRestaurantCard from "../components/dashboardRestaurants/AddRestaurant";
import { Box } from "@mui/material";

// Use axios to fetch the statistics from server;
// instead of using the array from dashboardstats.js

const Dashboard = () => {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

  const [restaurants, setRestaurants] = useState([]);
  const [menusLeft, setMenusLeft] = useState(50);
  const [RevenueStats, setRevenueStats] = useState([]);
  const [OrderStats, setOrderStats] = useState([]);
  const [ClickStats, setClickStats] = useState([]);

  const restaurantId = "646eb3a8b30795e61bc2a0de";


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

  // TODO: Bring functionality to making restaurants editable

  console.log("restaurants:", restaurants);
  if (restaurants.length >= 100) {
    return restaurants.map((restaurant) => {
      <p style={{ margin: "100px" }}> {restaurant.name}</p>;
    });
  } else {
    return (
      <Container
        sx={{ bgcolor: "primary.grey", width: "100vw", height: "auto" }}
      >
        <Typography
          variant={"h2"}
          align="center"
          color="primary.white"
          gutterBottom
          sx={{ pt: "15vh", pb: "5vh", ml: '-4vw' }}
          fontWeight={"bold"}
        >
          {user.name}'s Dashboard
        </Typography>

        <Paper
          elevation={20}
          sx={{
            height: "45vh",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            pl: "1vw",
            pr: "1vw",
            ml: "-7.5vw",
            bgcolor: "primary.verydark",
            mb: "100px",
            alignItems: "center",
          }}
        >
          <ViewRestaurants />

          <Typography variant="h3" align="center" sx={{ mb: "10vh" }}>
            ADD RESTAURANT
          </Typography>
        </Paper>

        <Paper
          elevation={20}
          sx={{
            height: "45vh",
            width: "auto",
            display: { xs: "none", md: "flex" },
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
          <Paper elevation={10} sx={{ height: "20vh", mt: "12vh", ml: "3vw" }}>
            <BarChart chartData={RevenueChartData} />{" "}
          </Paper>

          <Paper elevation={10} sx={{ height: "20vh", mt: "12vh", pr: "1vw" }}>
            <BarChart chartData={orderChartData} />{" "}
          </Paper>

          <Paper
            elevation={10}
            sx={{
              height: "20vh",
              mt: "12vh",
              mr: "3vw",
              width: "12vw",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ m: "10", color: "primary.verydark" }}
            >
              Restaurants left
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
              sx={{ mt: "1vh", display: "center" }}
              onClick={() => {
                setMenusLeft(menusLeft - 1);
              }}
              component={Link}
              to={"../restaurants"}
            >
              Make Restaurant
            </Button>
          </Paper>
        </Paper>
        <Paper
          elevation={20}
          align="center"
          sx={{
            height: "30vh",
            width: "auto",
            display: { xs: "none", md: "flex" },
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
      </Container >
    );
  }
};

export default Dashboard;
