import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Home from "./Home";
import ResponsiveAppBar from "../components/AppBarHomepage";
import SignIn from "./SignIn";
import SupportPage from "./Support";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import StickyFooter from "../components/StickyFooter";
import { AppBar } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ccff',
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      color: '#FFFFFF',
    },
    body2: {
      color: '#FFFFFF',
    },
    h1: {
      color: '#FFFFFF'
    },
    h2: {
      color: '#FFFFFF'
    },
    h3: {
      color: '#FFFFFF'
    },
    h4: {
      color: '#FFFFFF'
    },
    h5: {
      color: '#FFFFFF'
    },
    h6: {
      color: '#FFFFFF'
    },
    overline: {
      color: '#FFFFFF'
    },
    caption: {
      color: '#FFFFFF'
    },
    p: {
      color: '#FFFFFF'
    }
  }
})

export default function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {" "}
        <ResponsiveAppBar />
        <div id="detail">
          <Outlet />
        </div>
        <StickyFooter />
      </ThemeProvider>
    </>
  );
}
