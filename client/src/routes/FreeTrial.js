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
import { AppButton } from "../components/AppButton";

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
          height: "100%",
          width: "100vw",
        }}
      >
        {" "}
        <Typography
          sx={{ pt: '10vh' }}
          component="h1"
          variant="h2"
          align="center"
          color="primary.white"
          gutterBottom
          fontWeight={"bold"}
        >
          Free Trial
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xl: "row", xs: "column" },
            pb: "10vh",
          }}
        >
          {features.map((feature) => (
            <Paper
              key={feature.title}
              variant="h1"
              elevation={2}
              sx={{
                p: { xs: "10vw", md: "10vw", xl: "2vw" },
                m: 1,
                mt: "4vh",
                pb: { xl: "-10vh" },
                display: "grid",
                bgcolor: "primary.background",
                width: 400,
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
          mt: { xs: '100vh', md: '100vh', l: "30vh", xl: "30vh" },
          mb: '40vh',
          height: "100vh",
          ml: "0.3vw",
          background: "linear-gradient(45deg, #7a2c2c 30%, #222 90%)",
          width: "99vw",
          minWidth: "99vw",
          display: { xl: "flex", xs: "none" },

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
          <AppButton variant="outlined" destination={"../menu_builder"}>
            {" "}
          </AppButton>
        </Box>
        <CardMedia
          component="img"
          src={menuexampleinpng}
          alt="Menu Example"
          height="70%"
        />{" "}
        <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
