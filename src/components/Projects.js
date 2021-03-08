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
      <section class="bg-gray-800 py-20">
        <div class="max-w-8xl px-6 mx-auto text-center">
          <h2 class="text-2xl font-semibold text-white">Projects</h2>

          <div class="flex items-center justify-center mt-10">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
              {projectData &&
                projectData.map((project, index) => (
                  <div class="max-w-md w-full">
                    <div class="flex items-center justify-center rounded-md h-96 border-teal-400 overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      <img
                        class="object-cover h-full w-full"
                        src={project.mainImage.asset.url}
                        alt={project.title}
                      />
                    </div>

                    <div class="block bg-gray-700 rounded-md mt-4 overflow-hidden ">
                      <div class="py-2 px-3 text-center text-md">
                        <p class=" text-2xl text-gray-300 font-bold">{project.title}</p>

                        <span class="block text-gray-500 mt-2">
                          {project.description}
                        </span>

                        <p class="text-gray-300 font-semibold">Technologies Used: </p>
                        <span class="block text-gray-500 my-2">
                        {project.technology}
                        </span>

                        <button class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 mx-1 rounded">
                          Source Code
                        </button>
                        <button class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 mx-1 rounded">
                          See Live
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div class="flex items-center justify-center mt-12">
            <a
              class="flex items-center text-white hover:underline hover:text-gray-200"
              href="#"
            >
              <span>View More On Github</span>

              <svg
              
                class="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>



   
    </>
  );
}
