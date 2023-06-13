import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(res =>{
      console.log(res)
      Swal.fire({
              icon:'success',
              title: 'Logout Successfull',
              showConfirmButton: false,
              timer: 1500
            })
    })

  }
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>

            <li>
              <Link>Instructors</Link>
            </li>
            <li>
              <Link>Classes</Link>
            </li>
            {user && <li>
            <Link>Dashboard</Link>
          </li>}
          </ul>
        </div>
        <a className="uppercase text-4xl text-teal-600">
          MMA CAMP <span className="text-sm ml-0">©</span>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>

          <li>
            <Link>Instructors</Link>
          </li>
          <li>
            <Link>Classes</Link>
          </li>
          {user && <li>
            <Link>Dashboard</Link>
          </li>}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <img src={user?.photoURL} className="rounded-full mr-3 w-[60px] h-2/3" ></img>:<FaUser className="text-2xl border rounded-full  text-teal-500 mr-5 "></FaUser>}
        {user ? 
          <button onClick={handleLogOut} className="btn btn-accent text-white ">Log out</button>
        :<Link to={"/login"}>
          <button className="btn btn-accent text-white ">Log In</button>
        </Link> }
      </div>
    </div>
  );
};

export default Header;
