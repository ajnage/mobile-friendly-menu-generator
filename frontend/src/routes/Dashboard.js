import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { ClickStats, OrderStats, RevenueStats } from "./DashboardStats";
import { BarChart } from "../components/Charts/BarChart";
import { LineChart } from "../components/Charts/LineChart";

import { CategoryScale } from "chart.js";
import "chart.js/auto";
import axios from "axios";

// BIG IMPORTANT PRIORITY ===>
// Figure out how to use chartjs
// Read documentation from them https://www.chartjs.org/docs/latest/getting-started/integration.html
// I left off there, but the goal is to manage to put in charts describing different statistics
// From the array 'statistics'
// <===

import { Line } from "react-chartjs-2";
import Container from "@mui/material/Container";

// Use axios to fetch the statistics from server;
// instead of using the array from dashboardstats.js

const Dashboard = () => {
  // const [dashboardStatistics, setDashboardStatistics] = useState([]);
  // useEffect(() => {
  //   axios.get("http://10.44.22.181:2121/api/v1/dasboardStats/").then((data) => {
  //     setDashboardStatistics(data?.data);
  //   });
  // }, []);

  const [RevenueChartData, setRevenueChartData] = useState({
    labels: RevenueStats.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: RevenueStats.map((data) => data.revenue),
        title: RevenueStats.title,
        backgroundColor: ["#00ccff"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [orderChartData, setOrderChartData] = useState({
    labels: OrderStats.map((data) => data.month),
    datasets: [
      {
        label: "Orders",
        data: OrderStats.map((data) => data.orders),
        title: OrderStats.title,
        backgroundColor: ["#00ccff"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [clickChartData, setClickChartData] = useState({
    labels: ClickStats.map((data) => data.month),
    datasets: [
      {
        label: "Clicks",
        data: ClickStats.map((data) => data.clicks),
        title: ClickStats.title,
        backgroundColor: [
          "#00ccff",
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
  });

  // Here the user variable is just the username of the restaurant owner, currently it is
  // set to 'owner' before someone signs in!
  const user = `Owner`;
  return (
    <Container sx={{ bgcolor: "grey", width: "100vw", height: "auto" }}>
      <Typography
        variant="h1"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ pt: 5, pb: 5 }}
      >
        {" "}
        {user}'s Dashboard
      </Typography>
      <Typography variant="h3" align="center" sx={{ mb: "10vh"}}>
        General Statistics
      </Typography>
      <Paper
        elevation={20}
        sx={{
          height: "60vh",
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
        <Paper elevation={10} sx={{ height: "30vh", mt: "12vh", ml: "7vw" }}>
          <BarChart chartData={RevenueChartData} />{" "}
        </Paper>

        <Paper elevation={10} sx={{ height: "30vh", mt: "12vh", mr: "7vw" }}>
          <BarChart chartData={orderChartData} />{" "}
        </Paper>
      </Paper>
      <Paper
        elevation={20}
        align="center"
        sx={{
          height: "30vh",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          flexGrow: "4",
          flexWrap: "wrap",
          pl: "1vw",
          pr: "1vw",
          ml: "-7.5vw",
          bgcolor: "primary.verydark",
          overflow: "hidden",
          mb: "100px",
        }}
      >
        <Typography variant="h3" align="center" sx={{ mt: "-20" }}>
          {" "}
          Extra{" "}
        </Typography>
        <Paper sx={{ my: 10, align: 'center' }} width={"40vw"}>
          <LineChart chartData={clickChartData} />
        </Paper>
      </Paper>
    </Container>
  );
};

export default Dashboard;
