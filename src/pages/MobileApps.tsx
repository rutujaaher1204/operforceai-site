import React from "react";
import product2 from "../assets/product_2.png";
export default function MobileApps() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 p-8">
      <div id="platform" className="max-w-xl text-center ">
    
<div id="platform" className="max-w-xl mx-auto mt-24 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-left">
Introducing AI Mobile Apps
 </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left text-justify ">
Mobile AI Apps provide you, our customers one more interface to our Enterprise AI platform™ on the cloud. At the moment, development being prioritized for much acclaimed and sought after Apps. New additions to our attempt to AI-fy Business Operations are in progress...  </p>
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
         <div className="mt-16 w-full max-w-2xl space-y-6">
        {[
          "Employee AI Experience",
          "AI CRM",
          "AI Invoicing",
          "AI Sales",
          "AI Inventory",
          "AI Material Management",
          "AI Epay"
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border border-white/60 px-6 py-4 rounded-md shadow-sm"
          >
            <span className="text-2xl font-script text-white">{item}</span>
            <a
              href="#"
              className="text-blue-600 underline font-medium text-lg"
            >
              Download
            </a>
          </div>
        ))}
      </div>
       <img
              src={product2}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
           
    </div>
  );
}
