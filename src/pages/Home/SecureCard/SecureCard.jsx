import React from "react";
import { CiCloudOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { SiGooglecloudstorage } from "react-icons/si";
import { SlRefresh } from "react-icons/sl";

const SecureCard = () => {
  return (
    <div className="py-20 w-8/12 mx-auto text-gray-200">
      <h1 className="text-5xl md:text-7xl font-semibold text-center mb-16 leading-tight">
        Secure code <br /> generation at scale
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="text-center flex flex-col items-center p-3 md:p-8">
          <p className="text-4xl bg-gray-800 p-4 rounded-full text-purple-400 mb-5">
            <MdOutlineSettings />
          </p>
          <h3 className="text-2xl font-semibold mb-3">Powerful APIs</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Use our APIs to create isolated <br /> development environments
            (sandboxes) <br /> that can run any type of code you need.
          </p>
        </div>
        {/* Card 2 */}
        <div className="text-center flex flex-col items-center p-3 md:p-8">
          <p className="text-4xl bg-gray-800 p-4 rounded-full text-purple-400 mb-5">
            <GrSecure />
          </p>
          <h3 className="text-2xl font-semibold mb-3">Secure & isolated</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Every environment runs in isolation, <br /> so you can safely run
            untrusted code <br /> without it affecting your system.
          </p>
        </div>
        {/* Card 3 */}
        <div className="text-center flex flex-col items-center p-3 md:p-8">
          <p className="text-4xl bg-gray-800 p-4 rounded-full text-purple-400 mb-5">
            <SiGooglecloudstorage />
          </p>
          <h3 className="text-2xl font-semibold mb-3">Ready for scale</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            We can handle millions of concurrent <br /> VMs and make it easy to
            provision, <br /> manage and decommission VMs.
          </p>
        </div>
        {/* Card 4 */}
        <div className="text-center flex flex-col items-center p-3 md:p-8">
          <p className="text-4xl bg-gray-800 p-4 rounded-full text-purple-400 mb-5">
            <CiCloudOn />
          </p>
          <h3 className="text-2xl font-semibold mb-3">Continuous context</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Resume development within the same <br /> sandbox after periods of
            inactivity. <br /> With no loss thanks to our snapshots.
          </p>
        </div>
        {/* Card 5 */}
        <div className="text-center flex flex-col items-center p-3 md:p-8">
          <p className="text-4xl bg-gray-800 p-4 rounded-full text-purple-400 mb-5">
            <SlRefresh />
          </p>
          <h3 className="text-2xl font-semibold mb-3">
            Quick start & auto resume
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Our microVM infrastructure allows us <br /> to spin up entire VMs, clone
            them and <br /> restore snapshots within 2 seconds.
          </p>
        </div>
        {/* Card 6 */}
        <div className="text-center flex flex-col items-center p-3 md:p-8">
          <p className="text-4xl bg-gray-800 p-4 rounded-full text-purple-400 mb-5">
            <FaRegClock />
          </p>
          <h3 className="text-2xl font-semibold mb-3">Customizable hibernation</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Gain total control over periods of <br /> inactivity before auto hibernation kicks in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecureCard;
