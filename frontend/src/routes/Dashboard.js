import * as React from "react";
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

// BIG IMPORTANT PRIORITY ===>
// Figure out how to use chartjs
// Read documentation from them https://www.chartjs.org/docs/latest/getting-started/integration.html
// I left off there, but the goal is to manage to put in charts describing different statistics
// From the array 'statistics'
// <===

import { Line } from "react-chartjs-2";

import Container from "@mui/material/Container";

const statistics = [
  {
    title: "Clicks",
    amount: [10, 12],
    description: "Number of clicks on website and mobile app",
    date: "2022-03-21",
    percentageChange: 0.2,
    type: "traffic",
  },
  {
    title: "Menus",
    amount: [1, 2],
    description: "Number of menus viewed on website and mobile app",
    date: "2022-03-21",
    percentageChange: -0.1,
    type: "engagement",
  },
  {
    title: "Orders",
    amount: [5, 7],
    description: "Number of orders placed on website and mobile app",
    date: "2022-03-21",
    percentageChange: 0.1,
    type: "sales",
  },
  {
    title: "Reservations",
    amount: [2, 3],
    description: "Number of reservations made on website and mobile app",
    date: "2022-03-21",
    percentageChange: 0.05,
    type: "sales",
  },
  {
    title: "Reviews",
    amount: [4, 6],
    description: "Number of reviews left on website and mobile app",
    date: "2022-03-21",
    percentageChange: 0.3,
    type: "engagement",
  },
];

const Dashboard = () => {
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
      <Paper
        elevation={20}
        sx={{
          height: "40vh",
          display: "grid",
          gridTemplateColumns: "2fr 15fr 15fr 5fr",
          pl: "1vw",
        }}
      >
        <Typography variant="h3" sx={{ color: "primary.verydark", mr: "1" }}>
          General Statistics
        </Typography>
        {statistics.map((stat) => {
          return (
            <Paper
              elevation={10}
              sx={{
                width: "30vw",
                height: "15vh",
                px: "8",
                mt: "10vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <Typography variant="h6" color="primary.verydark">
                {stat.title}
              </Typography>{" "}
              <Card sx={{ minWidth: "10vw" }}>
                <Line data={statistics.amount} />
              </Card>
            </Paper>
          );
        })}
      </Paper>
    </Container>
  );
};

export default Dashboard;
