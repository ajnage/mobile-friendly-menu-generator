import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";

import { Support } from "@mui/icons-material";
import ErrorPage from "../error-page";
import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, Button, Paper } from "@mui/material";
import { AppButton } from "../components/AppButton";

export default function LogOutPage() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogOut = () => {
    console.log("logging out");
    alert("You are being logged out");
    setLoggedIn(false);
  };

  // !loggedIn ? handleLogOut() : setLoggedIn(true);
  if (loggedIn) {
    return (
      <Container className="logOutBody" sx={{ height: "100vh" }}>
        <Paper
          elevation={20}
          sx={{
            height: "40vh",
            mt: "10vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "primary.verydark",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Are you sure you want to log out?
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "10vw",
              height: "4vh",
              alignSelf: "center",
              mt: "5vh",
            }}
            onClick={handleLogOut}
          >
            Yes
          </Button>
        </Paper>
      </Container>
    );
  }
  return (
    <Container className="logOutBody" sx={{ height: "100vh" }}>
      <Paper
        elevation={20}
        sx={{
          height: "40vh",
          mt: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "space-between",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "primary.verydark",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          You are logged out :(
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "10vw",
            height: "4vh",
            alignSelf: "center",
            mt: "5vh",
          }}
          component={Link}
          to={"../sign-in"}
        >
          Log Back In
        </Button>
      </Paper>
    </Container>
  );
}
