import React from "react";
import NavLogo from "../NavLogo/NavLogo";
import { FaGithub, FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-16 pb-8">
      <div className="w-11/12 lg:w-8/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        <div>
          <NavLogo />
        </div>

        <div>
          <h5 className="text-lg font-semibold ">Use Cases</h5>
          <ul className="text-sm text-gray-400 mt-4 space-y-2">
            <li><a href="#" className="hover:underline hover:text-white">CodeSandbox SDK</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Code in Sandboxes</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Storybook Integration</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Learn & Experiment</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold">Ecosystem</h5>
          <ul className="text-sm text-gray-400 mt-4 space-y-2">
            <li><a href="#" className="hover:underline hover:text-white">Features</a></li>
            <li><a href="#" className="hover:underline hover:text-white">VS Code Extension</a></li>
            <li><a href="#" className="hover:underline hover:text-white">SandPack</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Status</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold">Explore</h5>
          <ul className="text-sm text-gray-400 mt-4 space-y-2">
            <li><a href="#" className="hover:underline hover:text-white">Discover</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Changelog</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold">Company</h5>
          <ul className="text-sm text-gray-400 mt-4 space-y-2">
            <li><a href="#" className="hover:underline hover:text-white">About</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Support</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Brand Kit</a></li>
          </ul>
        </div>
      </div>

      
      <div className="w-11/12 lg:w-8/12 mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <div className="text-center md:text-left">
          <p>
            Copyright © {new Date().getFullYear()} CodeSandbox BV, a Together AI
            company. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
            <a href="#" className="hover:underline hover:text-white">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline hover:text-white">Privacy & Cookie Policy</a>
          </div>
        </div>

       
        <div className="flex items-center gap-5 text-xl">
          <a href="#" className="hover:text-white text-gray-400 transition"><FaGithub /></a>
          <a href="#" className="hover:text-white text-gray-400  transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white text-gray-400  transition"><FaGlobe /></a>
          <a href="#" className="hover:text-white text-gray-400  transition"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
