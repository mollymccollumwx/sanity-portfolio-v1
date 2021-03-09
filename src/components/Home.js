import React from "react";
import { Link } from "react-scroll";
import Resume from "../Assets/Resume-web.pdf"

const Home = () => {
  return (
    <>
      <section className="m-0 flex flex-col w-screen justify-center h-screen ml-4">
        <h1 className="text-4xl lg:text-8xl tracking-wide my-auto mx-auto  md:mx-48 mb-10 font-bold">
          {" "}
          Hi. My name is <span className="text-blue-500 font-extrabold">Molly</span>.
          <br />
          <span className="tracking-normal lg:text-5xl  text-2xl">
            I'm a <span className="">Full Stack</span> Developer.
          </span>
        </h1>
        <div className="justify-center my-auto mx-auto  mt-0 md:mx-48">
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
          <a href={Resume} target="_blank" rel="noreferrer">
                    <button className="border-2 border-transparent bg-green-500 ml-3 py-2 px-4 font-bold text-white rounded transition-all hover:border-green-500 hover:bg-transparent hover:text-green-500">
                      Resume
                    </button>
                  </a>
        </div>
      </section>
    </>
  );
};

export default Home;
