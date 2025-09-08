
// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import product1 from "../assets/product_1.png";
// import product2 from "../assets/product_2.png";
// import product3 from "../assets/product_3.png";
// import product4 from "../assets/product_4.png";
// import product5 from "../assets/product_5.png";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const timer = useRef<number | null>(null);

//   const showMenu = () => {
//     if (timer.current) clearTimeout(timer.current);
//     setOpen(true);
//   };

//   const hideMenu = () => {
//     timer.current = window.setTimeout(() => setOpen(false), 200);
//   };

//   return (
//     <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
//       <div className="w-full h-20 flex items-center px-10">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img src={Logo} alt="Logo" className="h-10 w-10" />
//           <span className="text-xl font-bold text-black">OperforceAI</span>
//         </div>

//         {/* Links */}
//         <nav className="hidden md:flex items-center gap-20 text-lg ml-32">
//           <Link to="/" className="font-semibold text-black hover:text-sky-300">
//             Home
//           </Link>

//           {/* Products dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={showMenu}
//             onMouseLeave={hideMenu}
//           >
//             <Link to="/products" className="text-black hover:text-sky-300">
//               Products
//             </Link>

//             {open && (
//               <div
//                 className="fixed left-1/2 -translate-x-1/2 mt-8 w-[1000px] min-h-[300px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg flex justify-between items-center z-50"
//                 onMouseEnter={showMenu}
//                 onMouseLeave={hideMenu}
//               >
//                 <Link to="/products/all" className="flex flex-col items-center hover:scale-105 transition">
//                   <img src={product5} alt="All Products" className="w-32 h-32 rounded-xl object-cover" />
//                   <p className="mt-2 font-medium">All Products</p>
//                 </Link>

//                 <Link to="/products/platform" className="flex flex-col items-center hover:scale-105 transition">
//                   <img src={product1} alt="Enterprise Platform" className="w-32 h-32 rounded-xl object-cover" />
//                   <p className="mt-2 font-medium">Enterprise Platform</p>
//                 </Link>

//                 <Link to="/products/apps" className="flex flex-col items-center hover:scale-105 transition">
//                   <img src={product2} alt="Enterprise Apps" className="w-32 h-32 rounded-xl object-cover" />
//                   <p className="mt-2 font-medium">Enterprise Apps</p>
//                 </Link>

//                 <Link to="/products/consulting" className="flex flex-col items-center hover:scale-105 transition">
//                   <img src={product3} alt="Business Consulting" className="w-32 h-32 rounded-xl object-cover" />
//                   <p className="mt-2 font-medium">Business Consulting</p>
//                 </Link>

//                 <Link to="/products/mobile" className="flex flex-col items-center hover:scale-105 transition">
//                   <img src={product4} alt="Mobile Apps" className="w-32 h-32 rounded-xl object-cover" />
//                   <p className="mt-2 font-medium">Mobile Apps</p>
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link to="/careers" className="text-black hover:text-sky-300">Careers</Link>
//           <Link to="/support" className="text-black hover:text-sky-300">Support</Link>
//           <Link to="/about" className="text-black hover:text-sky-300">About Us</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full h-20 flex items-center px-6 md:px-10">
        
        {/* Left side (Logo on desktop, hamburger on mobile) */}
        <div className="flex items-center gap-3">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-black">OperforceAI</span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl text-black"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>

        {/* Centered Nav  */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-20 text-lg">
          <Link to="/" className="font-semibold text-black hover:text-sky-300">Home</Link>
          <Link to="/products" className="text-black hover:text-sky-300">Products</Link>
          <Link to="/careers" className="text-black hover:text-sky-300">Careers</Link>
          <Link to="/support" className="text-black hover:text-sky-300">Support</Link>
          <Link to="/about" className="text-black hover:text-sky-300">About Us</Link>
        </nav>

        {/* Right spacer (keeps nav centered) */}
        <div className="hidden md:block w-10" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
            <span className="text-lg font-bold text-black">OperforceAI</span>
          </div>
          <button
            className="text-3xl text-black"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col items-center gap-6 p-6 text-lg">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-sky-400">Home</Link>
          <Link to="/products" onClick={() => setOpen(false)} className="hover:text-sky-400">Products</Link>
          <Link to="/careers" onClick={() => setOpen(false)} className="hover:text-sky-400">Careers</Link>
          <Link to="/support" onClick={() => setOpen(false)} className="hover:text-sky-400">Support</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-sky-400">About Us</Link>
        </nav>
      </div>
    </header>
  );
}
