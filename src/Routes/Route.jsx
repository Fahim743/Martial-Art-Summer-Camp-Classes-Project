import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../Layout/HomeLayOut";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import LogIn from "../Pages/Log In/LogIn";
import SignUp from "../Pages/Registration/SignUp";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/login",
          element:<LogIn></LogIn>,
        },
        {
          path: "/registration",
          element:<SignUp></SignUp>,
        }
      ],
  },
]);
