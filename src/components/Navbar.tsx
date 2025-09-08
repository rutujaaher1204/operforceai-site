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
//   const closeTimer = useRef<number | null>(null);

//   const openMenu = () => {
//     if (closeTimer.current) {
//       window.clearTimeout(closeTimer.current);
//       closeTimer.current = null;
//     }
//     setOpen(true);
//   };

//   const closeMenuDelayed = () => {
//     closeTimer.current = window.setTimeout(() => setOpen(false), 180);
//   };

//   return (
//     <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
//       <div className="section h-20 flex items-center">
//         <div className="flex items-center gap-32">
//           <div className="flex items-center gap-3">
//             <img src={Logo} alt="Logo" className="h-10 w-10" />
//             <span className="text-xl font-bold tracking-tight text-white">
//               OperforceAI
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center gap-24 text-xl relative">
//             <Link className="font-semibold text-black hover:text-sky-300" to="/">
//               Home
//             </Link>

//             <div
//               className="relative"
//               onMouseEnter={openMenu}
//               onMouseLeave={closeMenuDelayed}
//             >
//               <Link className="text-black hover:text-sky-300" to="/products">
//                 Products
//               </Link>

//               {open && (
//                 <div
//                   className="fixed left-1/2 -translate-x-1/2 mt-8 w-[1000px] min-h-[300px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg flex justify-between items-center z-50"
//                   onMouseEnter={openMenu}
//                   onMouseLeave={closeMenuDelayed}
//                 >
//                   <Link
//                     to="/products/all"
//                     className="flex flex-col items-center hover:scale-105 transition"
//                   >
//                     <img
//                       src={product5}
//                       alt="All Products"
//                       className="w-32 h-32 rounded-xl object-cover"
//                     />
//                     <p className="mt-2 text-base font-medium">All Products</p>
//                   </Link>

//                   <Link
//                     to="/products/platform"
//                     className="flex flex-col items-center hover:scale-105 transition"
//                   >
//                     <img
//                       src={product1}
//                       alt="Enterprise Platform"
//                       className="w-32 h-32 rounded-xl object-cover"
//                     />
//                     <p className="mt-2 text-base font-medium">
//                       Enterprise Platform
//                     </p>
//                   </Link>

//                   <Link
//                     to="/products/apps"
//                     className="flex flex-col items-center hover:scale-105 transition"
//                   >
//                     <img
//                       src={product2}
//                       alt="Enterprise Apps"
//                       className="w-32 h-32 rounded-xl object-cover"
//                     />
//                     <p className="mt-2 text-base font-medium">Enterprise Apps</p>
//                   </Link>

//                   <Link
//                     to="/products/consulting"
//                     className="flex flex-col items-center hover:scale-105 transition"
//                   >
//                     <img
//                       src={product3}
//                       alt="Business Consulting"
//                       className="w-32 h-32 rounded-xl object-cover"
//                     />
//                     <p className="mt-2 text-base font-medium">
//                       Business Consulting
//                     </p>
//                   </Link>

//                   <Link
//                     to="/products/mobile"
//                     className="flex flex-col items-center hover:scale-105 transition"
//                   >
//                     <img
//                       src={product4}
//                       alt="Mobile Apps"
//                       className="w-32 h-32 rounded-xl object-cover"
//                     />
//                     <p className="mt-2 text-base font-medium">Mobile Apps</p>
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link className="text-black hover:text-sky-300" to="/careers">
//               Careers
//             </Link>
//             <Link className="text-black hover:text-sky-300" to="/support">
//               Support
//             </Link>
//             <Link className="text-black hover:text-sky-300" to="/about">
//               About Us
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }



import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";
import product5 from "../assets/product_5.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const timer = useRef<number | null>(null);

  const showMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };

  const hideMenu = () => {
    timer.current = window.setTimeout(() => setOpen(false), 200);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full h-20 flex items-center px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-white">OperforceAI</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-20 text-lg ml-32">
          <Link to="/" className="font-semibold text-black hover:text-sky-300">
            Home
          </Link>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={showMenu}
            onMouseLeave={hideMenu}
          >
            <Link to="/products" className="text-black hover:text-sky-300">
              Products
            </Link>

            {open && (
              <div
                className="fixed left-1/2 -translate-x-1/2 mt-8 w-[1000px] min-h-[300px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg flex justify-between items-center z-50"
                onMouseEnter={showMenu}
                onMouseLeave={hideMenu}
              >
                <Link to="/products/all" className="flex flex-col items-center hover:scale-105 transition">
                  <img src={product5} alt="All Products" className="w-32 h-32 rounded-xl object-cover" />
                  <p className="mt-2 font-medium">All Products</p>
                </Link>

                <Link to="/products/platform" className="flex flex-col items-center hover:scale-105 transition">
                  <img src={product1} alt="Enterprise Platform" className="w-32 h-32 rounded-xl object-cover" />
                  <p className="mt-2 font-medium">Enterprise Platform</p>
                </Link>

                <Link to="/products/apps" className="flex flex-col items-center hover:scale-105 transition">
                  <img src={product2} alt="Enterprise Apps" className="w-32 h-32 rounded-xl object-cover" />
                  <p className="mt-2 font-medium">Enterprise Apps</p>
                </Link>

                <Link to="/products/consulting" className="flex flex-col items-center hover:scale-105 transition">
                  <img src={product3} alt="Business Consulting" className="w-32 h-32 rounded-xl object-cover" />
                  <p className="mt-2 font-medium">Business Consulting</p>
                </Link>

                <Link to="/products/mobile" className="flex flex-col items-center hover:scale-105 transition">
                  <img src={product4} alt="Mobile Apps" className="w-32 h-32 rounded-xl object-cover" />
                  <p className="mt-2 font-medium">Mobile Apps</p>
                </Link>
              </div>
            )}
          </div>

          <Link to="/careers" className="text-black hover:text-sky-300">Careers</Link>
          <Link to="/support" className="text-black hover:text-sky-300">Support</Link>
          <Link to="/about" className="text-black hover:text-sky-300">About Us</Link>
        </nav>
      </div>
    </header>
  );
}
