import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import SignIn from "./routes/SignIn";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import SupportPage from "./routes/Support";
import FreeTrialPage from "./routes/FreeTrial";
import MenuBuilder from "./components/MenuBuilder";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Dashboard from "./routes/Dashboard";
import QRCodePage from "./routes/qr";
import LogOutPage from "./routes/LogOut";
import StaticMenuPage from "./routes/StaticMenu";

const router = createBrowserRouter([
  {
    path: "/menu_builder",
    element: <MenuBuilder />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Free Trial",
        element: <FreeTrialPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/qr",
        element: <QRCodePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/log out",
        element: <LogOutPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/static",
    element: <StaticMenuPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
