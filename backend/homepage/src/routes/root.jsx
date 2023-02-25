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


export default function Root() {
  return (
    <> 
      <ResponsiveAppBar />
      <div id="detail">
        <Outlet/>
      </div>
      < StickyFooter/>
    </>
  );
}
