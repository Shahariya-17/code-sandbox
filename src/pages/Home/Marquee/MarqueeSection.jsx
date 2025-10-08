import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const brands = [
    "NVIDIA",
    "Atlassian",
    "Uber",
    "Stripe",
    "Zendesk",
    "Adobe",
    "Shopify",
    "Algolia",
    "Microsoft",
    "Intel",
  ];

  return (
    <section className="bg-white py-12">
      <Marquee speed={60} gradient={false}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-10 text-gray-700 text-xl font-medium opacity-70 hover:opacity-100 transition-all duration-300"
          >
            {brand}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
