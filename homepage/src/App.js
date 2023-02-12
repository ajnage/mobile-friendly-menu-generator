import { motion } from "framer-motion";
import "./App.css";
import QR from "./QR.svg";
import { useState } from "react";

import Button from "@mui/material/Button";
import StickyFooter from "./StickyFooter";

export function AppButton() {
  return (
    <motion.div
      className="testButton"
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <Button variant="contained">Check it out</Button>
    </motion.div>
  );
}

export default function App() {
  const h1style = { color: "white", left: "30px" };
  return (
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
        This menu maker lets restaurant owners save the hassle of creating
        outdated, wasteful, and uninspiring menus
      </p>
      <StickyFooter />
    </div>
  );
}
