// app/page.js
import Nav from './components/Nav';
import Orbits from './components/Orbits';

export default function Home() {
  return (
    <div className="hero-bg min-h-screen flex flex-col">
      <Nav />

      <div className="container mx-auto flex flex-1 items-center px-8 lg:px-16">
        {/* Left column */}
        <div className="w-full lg:w-1/2 max-w-2xl">
          <h1 className="text-[64px] leading-[76px] font-extrabold text-black/95 dark:text-white/95 tracking-tight">
            Unlock Top
            <br />
            Marketing Talent
            <br />
            You Thought Was
            <br />
            Out of Reach —
          </h1>

          <h2 className="mt-4 text-[56px] leading-[68px] font-extrabold text-white">
            Now Just One
            <br />
            Click Away!
          </h2>

          <div className="mt-8 flex items-center gap-6">
            <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Get Started
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>

            
          </div>
        </div>

        {/* Right column */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Orbits />
        </div>
      </div>

      {/* footer logos row */}
      <div className="container mx-auto px-8 lg:px-16 pb-12">
        <div className="flex justify-between items-center text-gray-400 mt-10">
          <div className="flex gap-8 items-center">
            {/* <span className="opacity-80">Dreamure</span>
            <span className="opacity-80">SWITCH.WIN</span>
            <span className="opacity-80">sphere</span>
            <span className="opacity-80">PinSpace</span>
            <span className="opacity-80">Visionix</span> */}
          </div>
          <div className="text-sm text-gray-300">© 2025 My Shop</div>
        </div>
      </div>
    </div>
  );
}
