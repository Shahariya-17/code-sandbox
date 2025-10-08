import React from "react";

const Banner = () => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="bg-lime-400 flex justify-center gap-3 text-black py-4 text-center text-sm">
        <p>
          CodeSandbox is now part of Together AI! We have joined forces to
          launch CodeSandbox SDK and bring code interpretation to generative AI.
        </p>
        <div className="justify-end">
          <button className="bg-black text-lime-400 px-3 py-1 rounded-lg">
            Learn more
          </button>
        </div>
      </div>

      <div className="py-30">
        <h1 className="text-9xl font-semibold mb-12"><span className="text-lime-300">Sandboxes</span> <br /> <span className="text-lime-100">built for scale</span></h1>
        <p className="text-2xl font-semibold text-lime-100 mb-12">
          Programmatically spin up isolated sandboxes for instant <br /> code execution
          in your AI agents and code playgrounds.
        </p>
        <div>
            <button className="bg-lime-400 text-black px-3 py-1">Start for free</button>
            <button>Try CodeSandbox SDK</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
