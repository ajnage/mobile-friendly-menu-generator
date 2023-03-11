import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import { Container } from "@mui/material";

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
    </Container>
  );
}
