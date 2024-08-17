import { createBrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AboutUsPage from "../pages/aboutUsPage/AboutUsPage";
import HomePage from "../pages/homePage/HomePage";
import { LandingPage } from "../pages/landingPage/LandingPage";
import ContactUsPage from "../pages/contectUsPage/ContectUsPage";
import BranchesPage from "../pages/branchesPage/BranchesPage";
import CoursesPage from "../pages/courses/CoursesPage";
import GalleryPage from "../pages/galleryPage/GalleryPage";
import BlogPage from "../pages/blogPage/BlogPage";
import ResultsPage from "../pages/resultPage/ResultPage";
import AdmissionPage from "../pages/admissionPage/AdmissionPage";
import TeachersPage from "../pages/teachersPage/TeachersPage";
import EventsPage from "../pages/eventPage/EventPage";
import AlumniPage from "../pages/AlumniStudentPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
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
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/blog",
        element: <BlogPage/>
      },
      {
        path: "/result",
        element: <ResultsPage/>
      },
      {
        path: "/admission",
        element: <AdmissionPage/>
      },
      {
        path: "/teachers",
        element: <TeachersPage/>
      },
      {
        path: "/event",
        element: <EventsPage/>
      },
      {
        path: '/alumni',
        element: <AlumniPage/>
      }
    ],
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
]);
