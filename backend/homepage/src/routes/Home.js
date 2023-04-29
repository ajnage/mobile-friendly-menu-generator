import { motion } from "framer-motion";
import "../App.css";
import QR from "../QR.svg";
import { useState } from "react";

import { AppButton } from "../components/AppButton";
import ResponsiveAppBar from "../components/AppBarHomepage";
import Button from "@mui/material/Button";
import StickyFooter from "../components/StickyFooter";
import HorizontalNonLinearStepper from "../components/Stepper";
import SignIn from "./SignIn";

const h1style = { color: "white", left: "30px" };

const Home = () => (
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
      <h1 style={h1style}>Welcome to the menu-maker app!</h1>
      <AppButton />
    </div>
    <p className="App-intro">
      Our app lets restaurant owners save the hassle of creating menus!
    </p>
    <HorizontalNonLinearStepper />
  </div>
);

export default Home;
