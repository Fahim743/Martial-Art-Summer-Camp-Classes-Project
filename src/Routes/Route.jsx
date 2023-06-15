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
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";






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
        },
        {
          path:"myclasses",
          element : <MyClasses></MyClasses>,
        },
        {
          path: "manageclasses",
          element: <ManageClasses></ManageClasses>
        },
        {
          path: "manageuser",
          element: <ManageUser></ManageUser>
        }

      ]
    }
]);
