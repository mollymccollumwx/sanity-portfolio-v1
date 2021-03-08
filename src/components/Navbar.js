// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import icon from "./circled-m.png";

import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <nav className=" flex">
          <Link
            to="home"
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-100 hover:green-800 text-4xl font-bold tracking-widest cursor-pointer"
            activeClassName="text-white"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            M.
          </Link>
          <Link
            to="about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-green-800 cursor-pointer"
            activeClassName="text-white"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-green-800 cursor-pointer"
            activeClassName="text-white"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
