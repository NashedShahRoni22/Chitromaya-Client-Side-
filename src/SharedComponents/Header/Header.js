import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logoChitromaya.jpg";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <li>
      <Link to="/" className="mx-3">
        Home
      </Link>

      <Link to="/" className="mx-3">
        Blog
      </Link>

      <Link to="/services" className="mx-3">
        Services
      </Link>
      {/* conditional redering */}
      {user?.email ? (
        <>
          <Link to="/userReviews" className="mx-3">
            My Reviews
          </Link>

          <Link to="/addServices" className="mx-3">
            Add Services
          </Link>
        </>
      ) : (
        <></>
      )}
    </li>
  );
  const handelUserLogOut = () => {
    logOut()
      .then(() => {
        toast.error("Log Out Sucessfull!");
      })
      .catch((e) => {});
  };
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="flex items-center" to="/">
          <img src={logo} alt="" className="h-12 rounded-full" />
          <span className="ml-5 text-2xl">CHITROMAYA</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.displayName ? (
          <>
            <img src={user?.photoURL} alt="" className="h-12 w-12 mr-3 rounded-full" />
            <span>{user?.displayName}</span>
            <Link
              className="btn btn-circle hover:bg-red-500 ml-3"
              onClick={handelUserLogOut}
            >
              <AiOutlineLogout className="text-2xl"></AiOutlineLogout>
            </Link>
          </>
        ) : (
          <>
            <span>Login</span>
            <Link
              className="btn btn-circle hover:bg-green-500 ml-3"
              to="/login"
            >
              <AiOutlineLogin className="text-2xl"></AiOutlineLogin>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
