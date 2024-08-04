import { createBrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AboutUsPage from "../pages/aboutUsPage/AboutUsPage";
import HomePage from "../pages/homePage/HomePage";
import DrawerAppBar from "../shared-components/header/HeaderComponent";
import { LandingPage } from "../pages/landingPage/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
]);
