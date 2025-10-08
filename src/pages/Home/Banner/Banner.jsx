import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto">
      <div className="bg-lime-400 w-screen relative left-[50%] right-[50%] -mx-[50vw]">
        <div className="w-11/12 md:w-8/12 mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-3 text-black py-4 text-center md:text-left items-center text-sm">
          <p data-aos="fade-up" className="leading-relaxed text-sm md:text-base">
            CodeSandbox is now part of Together AI! We have joined forces to
            launch CodeSandbox SDK and bring code interpretation to generative AI.
          </p>
          <div
            className="flex items-center justify-center md:justify-end gap-2"
            data-aos="fade-left"
          >
            <button className="group flex items-center gap-2 bg-black text-lime-400 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-lime-500 hover:text-black hover:scale-105 text-sm md:text-base">
              <span>Learn more</span>
              <FaChevronRight className="text-lime-400 group-hover:text-black transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

     
      <div className="py-16 md:py-24">
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold mb-8 md:mb-12 leading-tight"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <span className="text-lime-300 block md:inline">Sandboxes</span>{" "} <br />
          <span className="text-lime-100 block md:inline">built for scale</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-2xl font-semibold text-lime-100 mb-10 md:mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Programmatically spin up isolated sandboxes for instant <br className="hidden md:block" /> 
          code execution in your AI agents and code playgrounds.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <button className="bg-lime-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-lime-300 transition text-sm md:text-base">
            Start for free
          </button>
          <div className="flex items-center gap-2 text-lime-400 hover:underline cursor-pointer text-sm md:text-base">
            <button>Try CodeSandbox SDK</button>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
