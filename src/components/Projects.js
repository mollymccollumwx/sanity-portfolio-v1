import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import "./Projects.css";
import { Link } from "react-scroll";

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
      <section className="py-20 mt-10" id="projects">
        <svg id="projects-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {" "}
        </svg>
        <div className="max-w-8xl px-6 mx-auto text-center">
          <h2 className="text-6xl font-semibold text-white mt-10">Projects</h2>

          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {projectData &&
                projectData.map((project, index) => (
                  <div key={index} className="max-w-md w-full">
                    <div className="rounded-t-md flex items-center justify-center h-96 border-teal-400 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      <img
                        className="object-cover h-full w-full"
                        src={project.mainImage.asset.url}
                        alt={project.title}
                      />
                    </div>

                    <div className="block bg-white overflow-hidden rounded-b-md">
                      <div className="py-2 px-3 text-center text-md">
                        <p className=" text-3xl text-black text-left font-bold">
                          {project.title}
                        </p>

                        <p className="text-black text-left text-1xl text-blue-500 font-semibold mt-2">
                          Technologies Used:{" "}
                        </p>
                        <span className="block text-left text-black-500 my-2 italic">
                          {project.technology}
                        </span>

                        <hr></hr>

                        <span className="block text-left text-black-500 mt-2 mb-8">
                          {project.description}
                        </span>

                        <a
                          href={project.githubLink}
                          target="_blank"
                          className="hover:underline text-blue-500 font-bold cursor:pointer"
                        >
                          Source Code
                        </a>

                        <a
                          href={project.deployedLink}
                          target="_blank"
                          className="hover:underline text-green-500 font-bold py-2 px-4 m-5 cursor:pointer"
                        >
                          See Live
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="flex items-center  mt-12">
                <span className="flex items-center text-white hover:underline hover:text-gray-200">
                  {" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
