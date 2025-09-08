export default function Hero() {
  return (
    <section className="w-full text-justify pt-16 pb-20 px-4 sm:px-8 lg:px-16">
      <p className="font-slogan text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white text-center mb-12">
        Building new possibilities
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-center">
        
        <div className="w-full md:w-[60%] px-0 md:px-6 lg:px-12 space-y-6">
          <h1 className="font-heading text-heading40 md:text-heading40 text-[#5b2333] leading-tight text-center md:text-left">
            Agentic AI Business Software for SMBs
          </h1>

          <p className="text-body18 font-body text-slate-700/90 text-justify md:text-left">
            AI-Native ERP and business application software, purpose-built for the AI-first era
            to fully digitize and intelligently automate every aspect of operations for small and
            medium enterprises — from MSMEs in emerging markets to SMBs in developed economies.
            Empowering businesses to work smarter, move quicker, and scale even faster.
          </p>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 text-body18 text-indigo-600 hover:underline text-center md:text-left"
          >
            Recognized as a top 10 most promising agentic AI startup of 2025
          </a>

          <div className="flex justify-center md:justify-start">
            <button
              className="mt-6 px-8 py-2 rounded-full text-white font-medium 
                         bg-gradient-to-r from-teal-400 to-blue-500 
                         hover:from-teal-500 hover:to-blue-600 
                         shadow-lg transition"
            >
              Contact Sales
            </button>
          </div>
        </div>

        <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-8 md:mt-24">
          <div className="w-full max-w-[400px] sm:max-w-[500px] h-[220px] sm:h-[300px] overflow-hidden shadow-lg rounded-lg">
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
