import { motion } from "framer-motion";
import "../App.css";
import QR from "../QR.svg";
import { useState } from "react";

import { AppButton } from "../components/AppButton";
import ResponsiveAppBar from "../components/AppBarHomepage";
import Button from "@mui/material/Button";
import StickyFooter from "../components/StickyFooter";
import HorizontalNonLinearStepper from "../components/Stepper";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const h1style = { color: "white", left: "30px" };

// Add light background, dark text

const Home = () => (
  <Box bgcolor={"primary.verydark"} sx={{ pb: "10vh", mt: "8vh" }}>
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="App-header">
        <motion.img
          src={QR}
          className="App-logo"
          alt="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
        <Typography
          variant="h2"
          sx={{
            pb: 10,
            xs: {
              variant: "h5",
            },
            fontWeight: 'bold'
          }}

          component={"span"}
        >
          Welcome to the menu-maker app!
        </Typography>
        <Typography
          component={"span"}
          variant="h3"
          sx={{
            p: 5,
            pb: 20,
            fontWeight: { xs: "light", md: "bold", lg: "bold", xl: "bold" }
          }}

        >
          Our app lets restaurant owners save the hassle of creating menus!
        </Typography>
        <AppButton destination={"../menu_builder"} />
      </div>

      <HorizontalNonLinearStepper />
    </div>
  </Box>
);

export default Home;
