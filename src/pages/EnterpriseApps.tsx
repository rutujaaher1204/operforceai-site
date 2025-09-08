import React from "react";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";
import product5 from "../assets/product_5.png"
export default function EnterpriseApps() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-enterprise-apps p-8">
      <div id="platform" className="max-w-xl text-center ">
<div id="platform" className="max-w-xl mx-auto mt-24 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
    Introducing Enterprise AI Apps™
  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
    AI Apps that help to build new possibilities for your enterprise business. They AI power some workflows while disrupt others to truly take your enterprise into the Era of Enterprise Intelligence.
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
              src={product4}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
            <div id="platform" className="max-w-xl mx-auto mt-16 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
Magical Marketing  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
We are making marketing Magical for better. It's going to provide SMBs and MSMEs the same power of advertising as the top brands, leveling the playing field.  </p>
</div>
<img
              src={product3}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
            <div id="platform" className="max-w-xl mx-auto mt-12 text-center">
  <h1 className="text-3xl font-bold text-black mb-6 text-center">
Integrated Sales  </h1>
  <p className="text-lg text-gray-800 leading-relaxed mb-8 text-left">
With AI powered Integrated Sales, the enterprise sales staff will be equipped with all the help they need to help customers.  </p>
  
</div>
<img
              src={product4}
              alt="All Products"
              className="rounded-xl shadow-lg max-w-3xl w-full mt-12 h-[500px] object-cover"
            />
            <div id="platform" className="max-w-xl mx-auto text-center">

</div>
    </div>
  );
}
