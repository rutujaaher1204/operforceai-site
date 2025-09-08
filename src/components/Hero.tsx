// export default function Hero() {
//   return (
//     <section className="w-full pt-16 pb-20">
//       <div className="space-y-10">
//         <p className="font-script text-5xl text-white text-center">
//           Building new possibilities
//         </p>

//         <div className="flex flex-col md:flex-row justify-between gap-12">
//           <div className="basis-full md:basis-[60%] px-6 md:pl-12 space-y-6">
//             <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
//               Agentic AI Business Software for SMBs
//             </h1>

//             <p className="text-lg text-slate-700/90 max-w-xl">
//               AI-Native ERP and business application software, purpose-built for the AI-first era
//               to fully digitize and intelligently automate every aspect of operations for small and
//               medium enterprises — from MSMEs in emerging markets to SMBs in developed economies.
//               Empowering businesses to work smarter, move quicker, and scale even faster.
//               <a
//                 href="https://google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-center text-lg text-indigo-600 font-semibold hover:underline mt-8 block"
//               >
//                 Recognized as a top 10 most promising agentic AI startup of 2025
//               </a>
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <button
//                 className="px-8 py-2 rounded-full text-white font-medium
//                            bg-gradient-to-r from-teal-400 to-blue-500
//                            hover:from-teal-500 hover:to-blue-600
//                            shadow-lg transition"
//               >
//                 Contact Sales
//               </button>
//             </div>
//           </div>

//           <div className="basis-full md:basis-[40%] mt-24 flex justify-end">
//             <div className="w-[500px] h-[300px] overflow-hidden  shadow-lg">
//               <video
//                 src="/videos/Ai_video.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="w-full text-justify pt-16 pb-20">
      {/* Tagline */}
      <p className="font-script text-5xl text-white text-center mb-12">
        Building new possibilities
      </p>

      <div className="flex flex-col md:flex-row gap-12 justify-between">
        
        {/* Left side */}
        <div className="w-full md:w-[60%] px-24 space-y-">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Agentic AI Business Software for SMBs
          </h1>

          <p className="text-lg text-slate-700/90">
            AI-Native ERP and business application software, purpose-built for the AI-first era
            to fully digitize and intelligently automate every aspect of operations for small and
            medium enterprises — from MSMEs in emerging markets to SMBs in developed economies.
            Empowering businesses to work smarter, move quicker, and scale even faster.
          </p>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 text-lg text-indigo-600 font-semibold hover:underline"
          >
            Recognized as a top 10 most promising agentic AI startup of 2025
          </a>

          <button
            className="mt-6 px-8 py-2 rounded-full text-white font-medium 
                       bg-gradient-to-r from-teal-400 to-blue-500 
                       hover:from-teal-500 hover:to-blue-600 
                       shadow-lg transition"
          >
            Contact Sales
          </button>
        </div>

        {/* Right side */}
        <div className="w-full md:w-[40%] flex justify-end mt-12 md:mt-24">
          <div className="w-[500px] h-[300px] overflow-hidden shadow-lg">
            <video
              src="/videos/Ai_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
