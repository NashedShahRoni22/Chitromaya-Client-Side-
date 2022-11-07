import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logoChitromaya.jpg";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
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

      <Link to="/orders" className="mx-3">
        Reviews
      </Link>

      <Link to="/login" className="mx-3">
        Login
      </Link>
    </li>
  );
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
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className="h-12 rounded-full" />
          <span className="ml-5">CHITROMAYA</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <span className="mr-5">Login</span>

        <Link className="btn btn-circle">
          <AiOutlineLogin className="text-2xl"></AiOutlineLogin>
        </Link>
      </div>
    </div>
  );
};

export default Header;
