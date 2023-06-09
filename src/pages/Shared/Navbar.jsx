import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
    const navItems = <>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/myTasks'>My Tasks</Link>
    </li>
    <li>
        <Link to='/addTask'>Add Task</Link>
    </li>
    <li>
        <Link to='/about'>About</Link>
    </li>
    <li>
        <Link to='/blogs'>Blogs</Link>
    </li>
    </>
  return (
    <div className="navbar max-w-screen-xl bg-base-200">
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
            {navItems}
          </ul>
        </div>
        <div className="flex">
            <img className="w-16" src={logo} alt="" />
            <Link className="btn btn-ghost normal-case text-3xl font-bold text-teal-500">Task Vault</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-accent text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
