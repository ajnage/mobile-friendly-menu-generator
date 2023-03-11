import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { Description, Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import { Container, Paper } from "@mui/material";
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
    <Container sx={{ bgcolor: "primary.grey", height: "100vh", width: "100" }}>
      {" "}
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
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
            sx={{ p: 3, m: 1, display: "grid", bgcolor: "primary.background" }}
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
  );
}
