import React from "react";
import { Link } from "react-scroll";
import image from "./molly1x1.JPG"

const About = () => {
  return (
    <>
      <div id="about" class="min-w-screen min-h-screen bg-blue-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-20 mb-10 md:mb-0">
              
              <div class="relative">
                <img
                  src={image}
                  class="relative z-10"
                  alt=""
                />
               <div class="border-4 border-blue-400 absolute top-28 bottom-28 left-28 right-28 z-0"></div> 
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold text-5xl mb-5">
                  MOLLY McCOLLUM
                </h1>
                <p class="text-md">
                I'm a full-stack developer leveraging both a strong science and communications background. I recently completed GA Tech's Full-Stack Web Development Certificate Program and I'm seeking my first job in front-end or full-stack development. Prior to a career in tech, I worked as a broadcast meteorologist for 5 years in the Great Plains and in my hometown of Atlanta. I have a B.S. in Atmospheric Sciences from the University of Georgia.{" "}
              
                </p>
         
              </div>
              <div>
                
                <div class="inline-block align-bottom">
                  <button class="bg-blue-300 opacity-75 hover:opacity-100 text-blue-900 hover:text-blue-900 rounded-full px-10 py-2 font-semibold">
                    <i class="mdi mdi-cart -ml-2 mr-2"></i> PROJECTS
                  </button>
                </div>
                <div class="inline-block align-bottom">
                  <button class="bg-blue-300 opacity-75 hover:opacity-100 text-blue-900 hover:text-blue-900 rounded-full px-10 py-2 font-semibold">
                    <i class="mdi mdi-cart -ml-2 mr-2"></i> RESUME
                  </button>
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
