import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../Layout/HomeLayOut";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import LogIn from "../Pages/Log In/LogIn";
import SignUp from "../Pages/Registration/SignUp";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import DashboardLayOut from "../Layout/DashboardLayOut";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";






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
        },
        {
          path: "/instructor",
          element: <Instructor></Instructor>
        },
        {
          path: "/classes",
          element:<Classes></Classes>,
        }
        
      ],
  },
    {
      path: "/dashboard",
      element: <DashboardLayOut></DashboardLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"addclass",
          element:<AddClass></AddClass>,
        }

      ]
    }
]);
