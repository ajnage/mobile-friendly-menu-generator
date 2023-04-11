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
import { Typography } from "@mui/material";


import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      background: "#191818",
      // 00ccff
      main: '#7a2c2c',
      verydark: '#222',
      // grey: '#808080'
      grey: '#575757'
    },
    secondary: {
      main: '#FFFFFF'
    },
    action: {
      active: 'rgb(200,0,0)',
      activeOpacity: 1,
      hover: 'rgb(200,0,0)',
      hoverOpacity: 0.7,
      focus: 'rgb(200,0,0)',
      focusOpacity: 1,
      selected: 'rgb(200,0,0)',
      selectedOpacity: 1
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        mode: 'dark'
      },
      styleOverrides: {
        primary: {
          root: {
            backgroundColor: '#808080'
          }
          
        }
      }
    },
    button: {    
      '&:hover': {
          background: 'none',
      },
  
  },
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
      fontSize: 100,
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
      <ThemeProvider theme={theme} >
        <Typography bgcolor="primary.grey">
        {" "}
        <ResponsiveAppBar />
        
        <div id="detail">
          <Outlet />
        </div>
        <StickyFooter />
        </Typography>
      </ThemeProvider>
    </>
  );
}
