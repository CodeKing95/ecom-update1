import React from "react";
import AboutImg from "../assets/about/about.jpg";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            About Tech Star
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring the latest technology products to passionate
            gamers, creators, and tech enthusiasts worldwide.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 mb-4">
              Tech Star is dedicated to providing premium
              electronics, gaming gear, and innovative tech
              solutions for modern lifestyles.
            </p>

            <p className="text-gray-700">
              From consoles and laptops to accessories and
              emerging tech, we help customers stay ahead
              of the curve.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
  <img
    src={AboutImg}
    alt="About Tech Star"
      className="rounded-2xl shadow-xl w-full h-[450px] object-cover hover:scale-105 transition duration-500"

  />

  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold mb-2">
      Why Choose Us?
    </h3>

    <ul className="space-y-1 text-gray-700 text-sm">
      <li>✓ Premium quality products</li>
      <li>✓ Fast delivery</li>
      <li>✓ Trusted worldwide</li>
      <li>✓ Latest tech</li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;