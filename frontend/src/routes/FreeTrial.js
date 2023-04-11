import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import menuexampleinpng from "../menuexampleinpng.png";
import { Description, Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  Container,
  Paper,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/material";
import { display } from "@mui/system";
import Button from "@mui/material/Button";

const features = [
  {
    title: "Easy to Pick Up ",
    description: "Our tool is very easy to pick up",
    buttonText: "Check It Out",
  },
  {
    title: "Free Documentation ",
    description: "You can find the documentation here",
    buttonText: "Learn More",
  },
  {
    title: "Quick Support ",
    description:
      "QRMenu's support team is best in class, and can help you with anything regarding the app.",
    buttonText: "Book an Appointment",
  },
];

export default function FreeTrialPage() {
  return (
    <React.Fragment>
      <Container
        sx={{
          bgcolor: "primary.grey",
          height: "100vh",
          width: "100",
        }}
      >
        {" "}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          fontWeight={"bold"}
        >
          Free Trial
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {features.map((feature) => (
            <Paper
              variant="h1"
              elevation={2}
              sx={{
                p: 3,
                m: 1,
                display: "grid",
                bgcolor: "primary.background",
                width: 350,
              }}
            >
              <Box sx={{ m: 1 }}>
                {" "}
                <Typography variant="h4" color="secondary.main" sx={{ p: 2 }}>
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
                <Button variant="contained" sx={{ py: 1, my: 4 }}>
                  {feature.buttonText}
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
      <Card
        variant="h1"
        elevation={20}
        sx={{
          overflowX: "none !important",
          mb: 40,
          height: "100vh",
          ml: "0.3vw",
          background: "linear-gradient(45deg, #7a2c2c 30%, #222 90%)",
          width: "99vw",
          minWidth: "99vw",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: 20,
            pl: 10,
          }}
        >
          <Typography variant="h1" sx={{ pb: 10 }}>
            Give our App a Try
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "80%",
              height: "8vh",
              bgcolor: "primary.grey",
              color: "secondary.main",
            }}
          >
            Take Me To IT!
          </Button>
        </Box>
        <CardMedia
          component="img"
          src={menuexampleinpng}
          alt="Menu Example"
          height="90%"
        />{" "}
        <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
