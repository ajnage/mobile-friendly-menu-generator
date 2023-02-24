import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";

import { Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";

export default function FreeTrialPage() {
  return (
    <>
      <h1>Free Trial Page</h1>
    </>
  );
}
