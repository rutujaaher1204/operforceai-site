import React from "react";
import { Link } from "react-router-dom";

const Support: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between ">
      <h1 className="font-script text-6xl md:text-7xl text-slate-900 mb-10 mt-24">
        Talk to our Ai
      </h1>

      <div className="w-full max-w-6xl h-[300px] bg-gray-100 rounded-[75px] shadow-xl mb-8 p-8 overflow-y-auto">
      </div>

      <div className="w-full max-w-6xl flex items-center bg-white rounded-full shadow-md px-4 py-1 mb-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 rounded-full outline-none text-gray-700"
        />
        <button className="ml-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition">
          Send
        </button>
      </div>

      <Link
        to="/about" 
        className="text-lg font-medium text-gray-800 hover:text-blue-600 transition "
      >
        Learn More <span className="inline-block">»</span>
      </Link>
    </div>
  );
};

export default Support;
