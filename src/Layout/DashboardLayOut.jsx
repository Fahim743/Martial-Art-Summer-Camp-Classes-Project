import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { FaHome ,FaBook,FaUserAlt} from 'react-icons/fa';

const DashboardLayOut = () => {
    return (
        <div>
            <Helmet>
                <title>MMA | Dashboard</title>
            </Helmet>

            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-teal-400 text-white">
      {/* Sidebar content here */}
      <li><Link to={"/"}><FaHome></FaHome> Home</Link></li>
      <li> <Link to={"/classes"}><FaBook></FaBook> Classes</Link></li>
      <li> <Link to={"addclass"}><FaUserAlt></FaUserAlt> Add Class</Link></li>
      
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayOut;