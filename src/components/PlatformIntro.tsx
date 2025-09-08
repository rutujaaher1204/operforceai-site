// import { FaRegAddressBook, FaFileInvoiceDollar, FaUserCog } from "react-icons/fa"; 
// import Platform from "../assets/platform.svg";

// export default function PlatformIntro() {
//   return (
//     <section className="section py-20">
//       <div className="max-w-2xl ">
//         {/* Heading */}
        
//         <h2 className="text-3xl md:text-4xl font-bold leading-snug text-red-900 text-left inline-block 
//                tracking-wide
//                uppercase leading-tight">
//           Enterprise AI Platform and Enterprise AI Apps for all your needs
//         </h2>

//         {/* Intro panel */}
//         <div
//           className="max-w-6xl mx-auto p-10
//              bg-transparent
//              border border-white/10"
//         >
//           <img src={Platform} alt="Platform Icon" className="h-16 w-16 shrink-0" />
//           <p className="text-lg text-slate-900 leading-relaxed text-left">
//             An integrated AI platform that helps to Digitalize and AI-fy Enterprise workflows such as
//             Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Accounting, HR, Payroll,
//             and more. Automate your workflows like never before — a couple of clicks, a couple of words,
//             and you’re done — It’s Magic!
//           </p>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="mt-20 border-b border-black/50"></div>

//       {/* Tagline */}
//       <div className="mt-12">
      

// <div className="mt-12 text-center">
//   <p
//     className="inline-block text-left
//                text-3xl md:text-4xl
//                font-extrabold tracking-wide
//                text-sky-600 uppercase leading-tight"
//   >
//     Launching Business Into<br />
//     The Era of Enterprise<br />
//     Intelligence.
//   </p>
// </div>


//         {/* Feature cards */}
//         <div className="mt-12 grid sm:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <FaRegAddressBook className="w-16 h-16 text-black" />,
//               title: "AI CRM",
//               desc: "The CRM app, with help from AI Agents, works behind the scenes to provide a flawless experience.",
//             },
//             {
//               icon: <FaFileInvoiceDollar className="w-16 h-16 text-black" />,
//               title: "AI Accounting",
//               desc: "Our AI Accounting is nothing short of magic. Your accounting book is updated and closed per day, week, month, quarter, and year.",
//             },
//             {
//               icon: <FaUserCog className="w-16 h-16 text-black" />,
//               title: "AI HR and Payroll",
//               desc: "Work-flows are seamlessly and completely automated with AI models and ML algorithms. AI Payroll© personalizes and customizes employee experience.",
//             },
//           ].map((f) => (
//             <div
//               key={f.title}
//               className="max-w-6xl mx-auto p-10
//              bg-transparent
//              border border-white/10"
//             >
                 
//               <div className="flex items-center gap-3">
//                 {f.icon}
//                 <h3 className="font-script text-2xl md:text-2xl text-slate-900">{f.title}</h3>
//               </div>
//               <p className="mt-4 text-xl text-slate-800/90 leading-relaxed text-left">{f.desc}</p>
//               <button className="mt-5 text-sm font-semibold text-indigo-700 hover:underline underline-offset-4 flex items-center gap-1">
//                 Learn More <span className="text-lg">»</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { FaRegAddressBook, FaFileInvoiceDollar, FaUserCog } from "react-icons/fa"; 
import Platform from "../assets/platform.svg";

export default function PlatformIntro() {
  return (
    <section className="pt-20 px-6 max-w-6xl mx-auto">
     
<div className="max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-red-900 text-left inline-block 
                tracking-wide
                uppercase leading-tight">
           Enterprise AI Platform and Enterprise AI Apps for all your needs
         </h2>
</div>
      
      <div className="mt-8 p-10 border border-white/10">
        <img src={Platform} alt="Platform" className="h-16 w-16 mb-4" />
        <p className="text-lg text-slate-900 leading-relaxed">
          An integrated AI platform that helps to Digitalize and AI-fy Enterprise workflows such as
          Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Accounting, HR, Payroll,
          and more. Automate your workflows like never before — a couple of clicks, a couple of words,
          and you’re done — It’s Magic!
        </p>
      </div>

      
      <div className="mt-20 border-b border-black/50"></div>

      
       <div className="mt-12 text-center">
  <p
    className="inline-block text-left
               text-3xl md:text-4xl
               font-extrabold tracking-wide
               text-sky-600 uppercase leading-tight"
  >
    Launching Business Into<br />
    The Era of Enterprise<br />
    Intelligence.
  </p>
</div>
      <div className="mt-12 grid sm:grid-cols-3 gap-8">
        {[
          {
            icon: <FaRegAddressBook className="w-16 h-16 text-black" />,
            title: "AI CRM",
            desc: "The CRM app, with help from AI Agents, works behind the scenes to provide a flawless experience.",
          },
          {
            icon: <FaFileInvoiceDollar className="w-16 h-16 text-black" />,
            title: "AI Accounting",
            desc: "Our AI Accounting is nothing short of magic. Your accounting book is updated and closed per day, week, month, quarter, and year.",
          },
          {
            icon: <FaUserCog className="w-16 h-16 text-black" />,
            title: "AI HR and Payroll",
            desc: "Work-flows are seamlessly and completely automated with AI models and ML algorithms. AI Payroll© personalizes and customizes employee experience.",
          },
        ].map((f) => (
          <div key={f.title} className="p-10  border border-white/10">
            <div className="flex items-center gap-3">
              {f.icon}
              <h3 className="font-script text-2xl text-slate-900">{f.title}</h3>
            </div>
            <p className="mt-4 text-xl text-justify text-slate-800/90 leading-relaxed">{f.desc}</p>
            <div className="mt-5 flex justify-center">
        <button className="text-sm font-semibold text-indigo-700 hover:underline flex items-center gap-1">
          Learn More <span className="text-lg">»</span>
        </button>
      </div>
          </div>
        ))}
      </div>
    </section>
  );
}
