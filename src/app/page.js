// app/page.js
import Button from './components/Buttons';
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
            <Button name="Get Started" />

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
