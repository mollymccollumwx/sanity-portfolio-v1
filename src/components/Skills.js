import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col mt-20 p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Skills
      </h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i
                style={{ color: "#61DBFB" }}
                className="fab fa-react fa-9x px-3 mt-3"
              ></i>
              <h3 className=" font-bold  text-4xl">React</h3>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-green-500 fab fa-node-js fa-9x px-3 mt-3"></i>
              <h3 className=" font-bold  text-4xl">Node.js</h3>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-gray-300 fas fa-database fa-9x px-3 mt-3"></i>
              <h3 className=" font-bold  text-4xl">mongoDB</h3>
              <h3 className=" font-bold  text-4xl">MySQL</h3>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-black-200 fas fa-server fa-9x px-3 mt-3"></i>

              <h3 className=" font-bold  text-4xl">Express</h3>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-yellow-400 fab fa-js-square fa-9x px-3 mt-3"></i>

              <h3 className=" font-bold  text-4xl">Javascript</h3>
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-pink-600 fab fa-sass fa-9x px-3 mt-3"></i>

              <h3 className=" font-bold  text-4xl">Sass</h3>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-yellow-600 fab fa-html5 fa-10x px-3 mt-3"></i>

              <h3 className="font-bold  text-4xl">HTML5</h3>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="flex flex-wrap justify-center w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <i className="text-blue-500 fab fa-css3 fa-10x px-3 mt-3"></i>

              <h3 className="font-bold text-4xl">CSS 3</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
