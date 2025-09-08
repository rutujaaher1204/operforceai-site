// import { FaCogs, FaBrain, FaUsersCog } from "react-icons/fa";

// export default function AiNativeERP() {
//   return (
//     <section className="py-20">
//       <div
//         className="max-w-6xl mx-auto p-10
//                    bg-transparent border border-white/10"
//       >
//         {/* Heading + Icons in one line */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
//           <h2 className="font-script text-3xl md:text-4xl text-slate-900 text-center md:text-left">
//             AI-Native ERP (Operations)
//           </h2>
//           <div className="flex justify-center gap-10 text-5xl text-slate-900">
//             <FaCogs />
//             <FaBrain />
//             <FaUsersCog />
//           </div>
//         </div>

//         {/* 3 columns */}
//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           {/* AI Inventory */}
//           <div>
//             <h3 className="text-xl font-semibold text-sky-600 mb-3">
//               AI INVENTORY
//             </h3>
//             <ul className="list-disc list-inside text-xl text-slate-900 space-y-2">
//               <li>
//                 In our new Inventory app, AI models, ML algorithms, and
//                 enterprise rules automate and operate your inventory across all
//                 your locations.
//               </li>
//               <li>
//                 It can be operated simply, like a phone – a couple of clicks and
//                 a few words, and you're done.
//               </li>
//             </ul>
//           </div>

//           {/* AI Material Management */}
//           <div>
//             <h3 className="text-xl font-semibold text-sky-600 mb-3">
//               AI Material Management
//             </h3>
//             <ul className="list-disc list-inside text-xl text-slate-900 space-y-2">
//               <li>We have reimagined Material Management with AI and ML.</li>
//               <li>
//                 Now most problems in material management are solved
//                 automatically by our AI.
//               </li>
//               <li>
//                 The AI will help you contact the right suppliers, negotiate, and
//                 sign contracts in hours, not days.
//               </li>
//             </ul>
//           </div>

//           {/* AI Production */}
//           <div>
//             <h3 className="text-xl font-semibold text-sky-600 mb-3">
//               AI PRODUCTION
//             </h3>
//             <ul className="list-disc list-inside text-xl text-slate-900 space-y-2">
//               <li>AI will automate production processes like never before.</li>
//               <li>
//                 For material management, labor maintenance, or performance
//                 problems, AI + ML provide thinking solutions.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { FaCogs, FaBrain, FaUsersCog } from "react-icons/fa";

export default function AiNativeERP() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto p-10 bg-transparent border border-white/10 rounded-xl">
        
        {/* Heading + Icons in one line */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-slate-900 text-center md:text-left">
            AI-Native ERP (Operations)
          </h2>
          <div className="flex justify-center gap-6 md:gap-10 text-4xl sm:text-5xl text-slate-900">
            <FaCogs />
            <FaBrain />
            <FaUsersCog />
          </div>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-left">
          
          {/* AI Inventory */}
          <div>
            <h3 className="text-xl font-semibold text-sky-600 mb-3">
              AI INVENTORY
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-slate-900 space-y-2">
              <li>
                In our new Inventory app, AI models, ML algorithms, and
                enterprise rules automate and operate your inventory across all
                your locations.
              </li>
              <li>
                It can be operated simply, like a phone – a couple of clicks and
                a few words, and you're done.
              </li>
            </ul>
          </div>

          {/* AI Material Management */}
          <div>
            <h3 className="text-xl font-semibold text-sky-600 mb-3">
              AI MATERIAL MANAGEMENT
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-slate-900 space-y-2">
              <li>We have reimagined Material Management with AI and ML.</li>
              <li>
                Now most problems in material management are solved
                automatically by our AI.
              </li>
              <li>
                The AI will help you contact the right suppliers, negotiate, and
                sign contracts in hours, not days.
              </li>
            </ul>
          </div>

          {/* AI Production */}
          <div>
            <h3 className="text-xl font-semibold text-sky-600 mb-3">
              AI PRODUCTION
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-slate-900 space-y-2">
              <li>AI will automate production processes like never before.</li>
              <li>
                For material management, labor maintenance, or performance
                problems, AI + ML provide thinking solutions.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
