import * as React from "react";
import { useState } from "react";
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
import { Statistics } from "./DashboardStats";
import BarChart from "./DashboardChart";
import { CategoryScale } from "chart.js";
import "chart.js/auto";

// BIG IMPORTANT PRIORITY ===>
// Figure out how to use chartjs
// Read documentation from them https://www.chartjs.org/docs/latest/getting-started/integration.html
// I left off there, but the goal is to manage to put in charts describing different statistics
// From the array 'statistics'
// <===

import { Line } from "react-chartjs-2";

import Container from "@mui/material/Container";

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: Statistics.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Statistics.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
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
    <Container sx={{ bgcolor: "grey", width: "100vw", height: "100vh" }}>
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
      <Typography variant="h3" align="center">
        General Statistics
      </Typography>
      <Paper
        elevation={20}
        sx={{
          height: "80vh",
          width: "45vw",
          display: "flex",
          flexDirection: "row",
          flexGrow: "4",
          flexWrap: "wrap",
          pl: "1vw",
          pr: "1vw",
          justifyContent: "space-between",
          alignSelf: "center",
          bgcolor: "primary.verydark",
        }}
      >
        {Statistics.map((stat) => {
          return (
            <Paper
              elevation={10}
              sx={{
                width: "20vw",
                height: "15vh",
                mt: "10vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BarChart chartData={chartData} />{" "}
            </Paper>
          );
        })}
      </Paper>
    </Container>
  );
};

export default Dashboard;
