import React, { useState, useEffect } from "react";
import sanityClient from "../client.js"; 



export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            mainImage{
                asset-> {
                    _id,
                    url
                },
                alt
            },
            description,
            technology,
            githubLink,
            deployedLink,
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="py-20" id="projects">
        <div className="max-w-8xl px-6 mx-auto text-center">
          <h2 className="text-2xl font-semibold text-black">Projects</h2>

          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        
              {projectData &&
                projectData.map((project, index) => (
                  <div className="max-w-md w-full">
                    <div className="flex items-center justify-center rounded-md h-96 border-teal-400 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:opacity-50">
                      <img
                        className="object-cover h-full w-full"
                        src={project.mainImage.asset.url}
                        alt={project.title}
                      />
                    </div>

                    <div className="block bg-gray-200 rounded-md overflow-hidden ">
                      <div className="py-2 px-3 text-center text-md">
                        <p className=" text-2xl text-blue-500 font-bold">{project.title}</p>

                        <span className="block text-black-500 mt-2">
                          {project.description}
                        </span>

                        <p className="text-blue-500 font-semibold mt-2">Technologies Used: </p>
                        <span className="block text-black-500 my-2">
                        {project.technology}
                        </span>
                        
                        <a  href={project.githubLink} target="_blank" className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 m-5 rounded">
                          Source Code
                        </a>
                        
                        <a href={project.deployedLink} target="_blank" className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 m-5 rounded">
                          See Live
                        </a>
                      </div>
                    </div>
                  </div>

                  
                  
                ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-12">
            <a
              className="flex items-center text-blue-500 hover:underline hover:text-gray-200"
              href="https://github.com/mollymccollumwx" target="_blank"
            >
              <span>View More On Github</span>

            </a>
          </div>
        </div>
      </section>

      



   
    </>
  );
}
