// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import {SocialIcon} from "react-social-icons";

import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <nav className=" flex">
          <Link
            to="home"
            className="inline-flex items-center py-6 px-3 mr-4 text-black-100 hover:blue-500 text-4xl font-bold tracking-widest cursor-pointer"
            active="text-white"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            M.
          </Link>
          <Link
            to="about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-blue-500 cursor-pointer"
            active="text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-blue-500  cursor-pointer"
            active="text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://github.com/mollymccollumwx" className="mr-4" target="_blank" fgColor="#fff "style={{height:35, width:35}}/>
          <SocialIcon url="https://www.linkedin.com/in/mollymccollumwx/" className="mr-4" target="_blank" fgColor="#fff "style={{height:35, width:35}}/>
          <SocialIcon url="https://twitter.com/wxmolly" className="mr-4" target="_blank" fgColor="#fff "style={{height:35, width:35}}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
