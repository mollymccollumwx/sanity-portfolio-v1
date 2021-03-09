import React from "react";
import { Link } from "react-scroll";
import image from "./molly.JPG";
import "./About.css";
import Resume from "./MollyMcCollum.pdf"

const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-w-screen min-h-screen bg-green-500 sm:my-20 flex items-center p-5 "
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          {" "}
          <polygon points="0, 100, 100, 0 100, 100"></polygon>
        </svg>
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 sm:w-3/5 px-20 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={image}
                  className="w-full relative z-10"
                  alt="profile picture"
                />
                {/* TODO: do something with this--not working */}
                <div className="border-4 border-blue-400 top-28 bottom-28 left-28 right-28 "></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold text-3xl">About Me</h1>
                <hr className="w-25"></hr>
                <h2 className="text-blue-500 mb-5 font-bold">Atlanta, GA</h2>
                <p className="text-md">
                  
                  I'm a full-stack developer leveraging both a strong science
                  and communications background. I recently completed GA Tech's
                  Full-Stack Web Development Certificate Program and I'm seeking
                  my first job in front-end or full-stack development. Prior to
                  a career in tech, I worked as a broadcast meteorologist for 5
                  years in the Great Plains and in my hometown of Atlanta. I
                  have a B.S. in Atmospheric Sciences from the University of
                  Georgia.{" "}
                </p>
                
              </div>
              <div>
                <div className="inline-block align-bottom">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button className="border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                      Projects
                    </button>
                  </Link>
                </div>
                <div className="inline-block align-bottom">
                  <a href={Resume}>
                  <button className="border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                    Resume
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
