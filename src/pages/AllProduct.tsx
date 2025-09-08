import React from "react";
import cityImage from "../assets/product_5.png"; 
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import Enterprise_ai_platform from "../assets/Enterprise_ai_platform.png";
import Enterprise_ai_Apps from "../assets/Enterprise_Ai_apps.png";
import Business_consulting from "../assets/Business_consultant.png";

export default function AllProducts() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-8">
      <h1 className="text-4xl font-bold mb-6 mt-24 text-black">Products</h1>
      <img
        src={cityImage}
        alt="All Products"
        className="rounded-2xl shadow-lg max-w-4xl w-full h-[450px] object-cover"
      />
      <div className="mt-12 text-center">
        <p className="max-w-lg mx-auto text-xl text-left md:text-xl text-gray-800 leading-relaxed">
          In our very first release this January, we released support for the
          Enterprise AI Platform™ built with AI-first and security-first
          principles from day one. It includes an initial set of Enterprise AI
          Apps™ to propel your business into the era of enterprise intelligence
          - full of possibilities.
        </p>
      </div>
      <button className="mt-8 mb-4 text-xl font-medium text-blue-600 hover:text-gray-700 transition-all flex items-center gap-2">
        Request Demo <span className="text-2xl">»</span>
      </button>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
           <h2 className="mb-8 text-2xl font-bold text-black">
            Enterprise AI Platform™
          </h2>
          <img
            src={Enterprise_ai_platform}
            alt="Enterprise AI Platform"
            className="w-56 h-56 rounded-full object-cover shadow-md"
          />
          <p className="mt-4 text-gray-700 text-left text-lg max-w-xs">
            A platform that helps your business to build new possibilities,
            capturing the true value of your Enterprise.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-8 text-2xl font-bold text-black">
            Enterprise AI Apps™
          </h2>
          <img
            src={Enterprise_ai_Apps}
            alt="Enterprise AI Apps"
            className="w-56 h-56 rounded-full object-cover shadow-md"
          />
          <p className="mt-4 text-gray-700 text-left text-lg max-w-xs">
            Apps that help you to automate Enterprise workflows in a better and
            finer way.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
           <h2 className="mb-8 text-2xl font-bold text-black ">
            Business Consulting
          </h2>
          <img
            src={Business_consulting}
            alt="Business Consulting"
            className="w-56 h-56 rounded-full object-cover shadow-md"
          />
          <p className="mt-4 text-gray-700 text-lg text-left max-w-xs">
            Business Consulting and strategy for Digitalization and
            AI-fication of Enterprise.
          </p>
        </div>
      </div>
    </div>
  );
}
