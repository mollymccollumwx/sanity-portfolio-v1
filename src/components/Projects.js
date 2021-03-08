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
            githubLink,
            deployedLink,
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    // <main>
    //   <section>
    //     <h1></h1>
    //     <h2></h2>
    //     <section>
    //         {projectData && projectData.map((project, index) => (
    //       <article>
    //         <h3>{project.title}</h3>
    //         <div>
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <p></p>
    //           <span></span>
    //         </div>
    //       </article>
    //       ))}
    //     </section>
    //   </section>
    // </main>
<>
<section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">Projects</h2>

                

                
                <div class="flex items-center justify-center mt-10">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projectData && projectData.map((project, index) => (
                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img class="object-cover" src={project.mainImage.asset.url} alt=""/>
                            </div>

                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">{project.title}</p>

                                    <span class="block text-gray-500 mt-2">{project.description}</span>
                                </div>
                            </a>
                        </div>

))} 
                    
                    </div>
                </div>

                <div class="flex items-center justify-center mt-12">
                    <a class="flex items-center text-white hover:underline hover:text-gray-200" href="#">
                        <span>View More On Github</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>


</>
  );
}
