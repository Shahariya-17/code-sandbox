import React from "react";

const BuiltSection = () => {
  return (
    <div className="bg-lime-400 text-black">
      <div className="w-8/12 mx-auto py-20">
        <h1 className="text-3xl md:text-8xl font-semibold">Built for AI agents and more</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-18">
          {/* Card-1 */}
          <div className="justify-center items-center">
            <h4 className="text-xl font-semibold mb-4">AI agents</h4>
            <p className="text-gray-600">
              Give agents a sandbox to resolve user prompts, or create <br />
              autonomous agents running on sandboxes. You can run multiple{" "}
              <br />
              agents in parallel without them interfering with each other. Using{" "}
              <br />
              the forking mechanism, you can also A/B test different agents.
            </p>
          </div>
          {/* Card-2 */}
          <div className="">
            <h4 className="text-xl font-semibold mb-4">
              Development environments at scale
            </h4>
            <p className="text-gray-600">
              Create a sandbox for each developer or student, and run their{" "}
              <br /> code in the sandbox. This way, you can run multiple <br />{" "}
              development environments in parallel without them interfering{" "}
              <br /> with each other.
            </p>
          </div>
          {/* Card-3 */}
          <div className="">
            <h4 className="text-xl font-semibold mb-4">
              Secure code interpretation & evals
            </h4>
            <p className="text-gray-600">
              Run code in a sandbox to interpret it. This way, you can run{" "}
              <br />
              untrusted code without worrying about it affecting your system.{" "}
              <br />
              You can also run popular evals on any piece of code.
            </p>
          </div>
          {/* Card-4 */}
          <div className="">
            <h4 className="text-xl font-semibold mb-4">CI/CD</h4>
            <p className="text-gray-600">
              Run tests inside a sandbox, and hibernate the sandbox when <br /> the
              tests are done. This way, you can quickly start the sandbox <br /> again
              when you need to run the tests again or evaluate the <br /> results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltSection;
