import { createBrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AboutUsPage from "../pages/aboutUsPage/AboutUsPage";
import HomePage from "../pages/homePage/HomePage";
import { LandingPage } from "../pages/landingPage/LandingPage";
import ContactUsPage from "../pages/contectUsPage/ContectUsPage";
import BranchesPage from "../pages/branchesPage/BranchesPage";


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
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/branches",
        element: <BranchesPage />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
]);
