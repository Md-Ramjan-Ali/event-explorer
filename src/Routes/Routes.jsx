import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayout from "../MainLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Profile from "../pages/Profile/Profile";
import UpcomingDetails from "../pages/UpcomingDetails/UpcomingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile></Profile>
          </PrivetRoutes>
        ),
      },
      {
        path: "/upcomingdetails/:id",
        element: (
          <PrivetRoutes>
            <UpcomingDetails></UpcomingDetails>
          </PrivetRoutes>
        ),
        loader: () => fetch("/upcomingEventData.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;