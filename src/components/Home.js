import React from "react";
import image from "./molly1x1.JPG";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section class="m-0 flex flex-col w-screen justify-center h-screen ml-4">
        <h1 class="text-7xl  tracking-wide my-auto mx-auto  md:mx-48 "> Hi. My name is <span className="text-green-500">
          Molly</span>.<br />
          <span className="tracking-normal text-5xl">I'm a Full Stack Developer.</span>
        </h1>
      </section>

    </>
  );
};

export default Home;
