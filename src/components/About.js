import React from "react";
import { Link } from "react-scroll";
import image from "../Assets/images/molly.JPG";
import "./About.css";
import Resume from "../Assets/Resume-web.pdf";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-w-screen min-h-screen bg-green-500 sm:my-20 flex items-center p-5 "
      >
        <svg id="about-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {" "}
        </svg>

        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-5 mx-auto text-gray-800 relative mb-40 lg:text-left mt-10">
          <div className="md:flex items-center -mx-8">
            <div className="w-full sm:w-3/5 px-20 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={image}
                  className="w-full relative z-10"
                  alt="profile"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold text-3xl">Molly McCollum</h1>
                <hr className="border-2 mb-4"></hr>
                <SocialIcon
                  url="https://github.com/mollymccollumwx"
                  className="mr-4"
                  target="_blank"
                  fgColor="#fff "
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/mollymccollumwx/"
                  className="mr-4"
                  target="_blank"
                  fgColor="#fff "
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://twitter.com/wxmolly"
                  className="mr-4"
                  target="_blank"
                  fgColor="#fff "
                  style={{ height: 35, width: 35 }}
                />

                <p className="text-sm mt-3">
                  I’m a full-stack developer with a background in meteorology
                  and communications. I know you're thinking, “that’s an
                  interesting combination,” and you’re right! When I was in
                  school at UGA for meteorology, I was introduced to programming
                  through classes on C++ and R. From then on, coding became a
                  fun hobby. After working as a broadcast meteorologist for 6
                  years, I decided to turn my fun hobby into a career. I
                  recently received my certificate in Full-Stack Development
                  from Georgia Tech. Now, I am looking forward to taking the
                  tech world by storm (I know, bad pun) and am currently seeking
                  my first opportunity in front-end or full-stack development!
                </p>
                <p className="mt-5 text-sm"> 
                  <strong>What I love about programming:</strong> Every day is a
                  new challenge and you never stop learning.{" "}
                </p>
                <p className="mt-1 text-sm">
                  <strong>What I would change about programming:</strong>{" "}
                  The back pain from working at your computer all day.
                  Seriously, I’m open to any advice.
                </p>

                <p className="mt-1 text-sm">
                  <strong>Three Fun Facts:</strong> I have two dogs, Charlie and
                  Elsie. I’ve flown into a category 4 hurricane with the Air
                  Force. Hiking is my favorite pastime.
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
                    rel="noreferrer"
                  >
                    <button className="border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                      Projects
                    </button>
                  </Link>
                </div>
                <div className="inline-block align-bottom">
                  <a href={Resume} target="_blank" rel="noreferrer">
                    <button className="border-2 border-transparent bg-green-500 ml-3 py-2 px-4 font-bold text-white rounded transition-all hover:border-green-500 hover:bg-transparent hover:text-green-500">
                      Resume
                    </button>
                  </a>
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
