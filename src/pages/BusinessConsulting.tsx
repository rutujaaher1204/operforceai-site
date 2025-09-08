import React from "react";
import product5 from "../assets/product_5.png"
export default function BusinessConsulting() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 p-8">
      <div id="platform" className="max-w-xl text-center ">
    
<div id="platform" className="max-w-xl mx-auto mt-24 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-left">
Introducing Enterprise Business Consulting  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left text-justify ">
    AI Business Consulting to AI-fi and digitize the business. Our team has experience helping customers around the world to solve business problems with AI and Machine Learning. In the Era of Enterprise Intelligence, We will understand your unique business challenges and work with you, and your team to take your Business to the Next Level.
  </p>
</div>


        <div className="flex justify-center gap-6">
         <button className="px-8 py-2 rounded-full font-medium text-white transition"
        style={{ backgroundColor: "#4a0d18" }}>
  Contact Sales
</button>

          <button className="text-xl font-medium text-black-700 hover:text-black transition flex items-center gap-2">
            Learn More <span className="text-2xl">»</span>
          </button>
        </div>
      </div>
       <img
              src={product5}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
           
    </div>
  );
}
