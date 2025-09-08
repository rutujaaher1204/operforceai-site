import React from "react";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";
import product5 from "../assets/product_5.png";
export default function EnterprisePlatform() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 p-8">
      <div className="flex space-x-8 mt-20 mb-10 text-lg font-medium text-black">
        <a href="#platform" className="hover:text-purple-600">
          Enterprise AI Platform
        </a>
        <a href="#erp" className="hover:text-purple-600">AI ERP</a>
        <a href="#crm" className="hover:text-purple-600">AI CRM</a>
        <a href="#hr" className="hover:text-purple-600">AI HR & Payroll</a>
        <a href="#accounting" className="hover:text-purple-600">AI Accounting</a>
      </div>

      <div id="platform" className="max-w-xl text-center ">
<div id="platform" className="max-w-xl mx-auto text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-left">
    Introducing Enterprise AI Platform™
  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
    An integrated AI platform that helps to Digitalize and AI-fy Enterprise
    workflows such as Enterprise Resource Planning (ERP), Customer
    Relationship Management (CRM), Support, Accounting, etc to launch the
    business into the Era of Enterprise Intelligence.
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
              src={product2}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
            <div id="platform" className="max-w-xl mx-auto mt-16 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-left">
    AI Enterprise Resource Planning (ERP) for Enterprise
  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
    We are revolutionizing ERP with our Enterprise AI Platform that is built with AI first principles. We support features that are needed for business to simplify operations and increase efficiency across the enterprise.
  </p>
</div>
<img
              src={product3}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
            <div id="platform" className="max-w-xl mx-auto mt-12 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
Digitialize Business  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
    Digitize your operations with AI directed workflows in a couple of clicks with minimal to no training.
  </p>
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
AI-fy Operations  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
Integrate AI into operations to increase efficiency and accuracy across all the departments such as Human Resources, Finance, Supply Chain, Manufacturing, etc.
  </p>
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
AI-power Employees  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
    Provide employees an AI-assistant that helps them with ‘getting things done’ with ease and on time.
  </p>
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
AI Customer Relationship Management (CRM) for Enterprise </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
We are revolutionizing CRM for the better. With an integrated platform and the power of AI, We can make the customer journey magical throughout the marketing funnel from start to finish.  </p>
</div>
<img
              src={product4}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
            <div id="platform" className="max-w-xl mx-auto text-center">
<h1 className="text-3xl font-bold text-black mb-6 mt-12 text-center">
AI Support for Enterprise </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
We are changing customer experience, helping customers, the enterprise and most importantly the support staff to solve customer issues using an integrated platform that has visibility across the enterprise.  
</p>
</div>
<img
              src={product5}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
    </div>
  );
}
