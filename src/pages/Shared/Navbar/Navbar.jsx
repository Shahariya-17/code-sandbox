import React from "react";
import NavLogo from "../NavLogo/NavLogo";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const links = <>
          <li><NavLink>Features</NavLink></li>
          <li><NavLink>Use Cases</NavLink></li>
          <li><NavLink>SDK</NavLink></li>
          <li><NavLink>Resources</NavLink></li>
          <li><NavLink>Docs</NavLink></li>
          <li><NavLink>Support</NavLink></li>
          <li><NavLink>Pricing</NavLink></li>
          
    </>
  return (
    <div className="navbar w-8/12 mx-auto shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {links}
          </ul>
        </div>
        <NavLogo></NavLogo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link><a className="btn hover:bg-lime-400">Sign In</a></Link>
        <Link><a className="btn bg-lime-400">Try for free</a></Link>
      </div>
    </div>
  );
};

export default Navbar;
