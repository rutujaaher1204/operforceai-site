
import React from "react";
import Logo from "../assets/logo.svg"
const About: React.FC = () => {
  return (
     <section className="about-bg min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="mt-12 text-center">
  <p
    className="max-w-lg mx-auto 
               text-lg text-left md:text-4xl 
               font-script text-gray-800 
               leading-relaxed"
  >
    At Operforce AI, our mission is to digitalize and automate enterprise
    workflows that enable them to operate and scale the business, and increase
    revenue and profitability of the business.
  </p>
</div>

      <button className="mt-8 mb-16 text-xl font-medium text-gray-900 hover:text-gray-700 transition-all flex items-center gap-2">
        Learn More <span className="text-2xl">»</span>
      </button>
            <img src={Logo} alt="Logo" className="h-36 w-36" />
    </section>
  );
};

export default About;
