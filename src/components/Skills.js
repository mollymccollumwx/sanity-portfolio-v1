import React from "react";

const Skills = () => {
  return (
    <div>
      <div class="flex items-center justify-center my-40">
      <div className="max-w-8xl px-6 mx-auto text-center p-40 border border-blue-600 border-8">
          {/* <h2 className="text-6xl font-semibold text-blue-500">Skills</h2> */}
        <div class=" p-10">
        <i className="text-blue-400 fab fa-react fa-2x px-3"></i>
        <i className="text-green-500 fab fa-node fa-2x px-3"></i>
        <i className="text-gray-600 fas fa-database fa-2x px-3"></i>
        <i className="text-yellow-400 fab fa-js-square fa-2x px-3"></i>
        <i className="text-pink-600 fab fa-sass fa-2x px-3"></i>
        <i className="text-yellow-600 fab fa-html5 fa-2x px-3"></i>
        <i className="text-blue-500 fab fa-css3-alt fa-2x px-3"></i>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Skills;
