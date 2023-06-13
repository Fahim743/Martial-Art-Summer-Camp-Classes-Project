import { Helmet } from "react-helmet-async";

import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import { Outlet } from "react-router-dom";

const HomeLayOut = () => {
  return (
    <div>
      <Helmet>
        <title>MMA | Home</title>
      </Helmet>
      ;<Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayOut;
