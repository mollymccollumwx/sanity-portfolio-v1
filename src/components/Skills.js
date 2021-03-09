import React from "react";

const Skills = () => {
  return (
    // <div>
    //   <div class="flex items-center justify-center my-40">
    //   <div className="max-w-8xl px-6 mx-auto text-center p-40 border border-blue-600 border-8">
    //       {/* <h2 className="text-6xl font-semibold text-blue-500">Skills</h2> */}
    //     <div class=" p-10">
    //     <i class="text-blue-400 fab fa-react fa-2x px-3"></i>
    //     <i class="text-green-500 fab fa-node fa-2x px-3"></i>
    //     <i class="text-gray-600 fas fa-database fa-2x px-3"></i>
    //     <i class="text-yellow-400 fab fa-js-square fa-2x px-3"></i>
    //     <i class="text-pink-600 fab fa-sass fa-2x px-3"></i>
    //     <i class="text-yellow-600 fab fa-html5 fa-2x px-3"></i>
    //     <i class="text-blue-500 fab fa-css3-alt fa-2x px-3"></i>
    //     </div>
    //     </div>

    //   </div>

    // </div>

    <div class="flex flex-col mt-20 p-auto">
      <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Skills
      </h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i
                style={{ color: "#61DBFB" }}
                class="fab fa-react fa-9x px-3 mt-3"
              ></i>
              <h3 class=" font-bold  text-4xl">React</h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-green-500 fab fa-node-js fa-9x px-3 mt-3"></i>
              <h3 class=" font-bold  text-4xl">Node.js</h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-gray-300 fas fa-database fa-9x px-3 mt-3"></i>
              <h3 class=" font-bold  text-4xl">mongoDB</h3>
              <h3 class=" font-bold  text-4xl">MySQL</h3>
            </div>
          </div>

          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-black-200 fas fa-server fa-9x px-3 mt-3"></i>
              
              <h3 class=" font-bold  text-4xl">Express</h3>
              
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-yellow-400 fab fa-js-square fa-9x px-3 mt-3"></i>
              
              <h3 class=" font-bold  text-4xl">Javascript</h3>
              
            </div>
          </div>
          
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-pink-600 fab fa-sass fa-9x px-3 mt-3"></i>
              
              <h3 class=" font-bold  text-4xl">Sass</h3>
              
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-yellow-600 fab fa-html5 fa-10x px-3 mt-3"></i>
              
              <h3 class="font-bold  text-4xl">HTML5</h3>
              
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <i class="text-blue-500 fab fa-css3 fa-10x px-3 mt-3"></i>
              
              <h3 class="font-bold text-4xl">CSS 3</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
