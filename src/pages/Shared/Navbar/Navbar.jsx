import React from "react";
import NavLogo from "../NavLogo/NavLogo";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/features" className="hover:text-lime-400">
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="/use-cases" className="hover:text-lime-400">
          Use Cases
        </NavLink>
      </li>
      <li>
        <NavLink to="/sdk" className="hover:text-lime-400">
          SDK
        </NavLink>
      </li>
      <li>
        <NavLink to="/resources" className="hover:text-lime-400">
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink to="/docs" className="hover:text-lime-400">
          Docs
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className="hover:text-lime-400">
          Support
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className="hover:text-lime-400">
          Pricing
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 lg:w-8/12 mx-auto py-3 px-2 lg:px-0 flex justify-between items-center">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-lg mt-3 w-52 p-2 shadow z-[999]"
          >
            {links}
          </ul>
        </div>
        <NavLogo />
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1 font-medium text-gray-200">
          {links}
        </ul>
      </div>

      
      <div className="navbar-end gap-2 sm:gap-4">
        <Link>
          <button className="btn btn-sm sm:btn-md hover:bg-lime-400 hover:text-black transition">
            Sign In
          </button>
        </Link>
        <Link>
          <button className="btn btn-sm sm:btn-md hidden md:block bg-lime-400 hover:bg-lime-300 text-black transition">
            Try for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
