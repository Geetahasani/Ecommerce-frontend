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
          <h1 className="text-5xl md:text-6xl xl:text-7xl leading-[1.1] font-light tracking-[-0.02em] text-white mb-8">
            Big deals.
            <br />
            <span className="font-medium text-gray-100">
              Bigger margins.
            </span>
            <br />
            <span className="text-4xl md:text-5xl xl:text-6xl font-extralight text-gray-200">
              Wholesale done right.
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl xl:text-4xl leading-tight font-light text-white/90 mb-8">
            Now just one click away
          </h2>

          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg font-light">
            Streamline your wholesale operations with intelligent automation and data-driven insights.
          </p>

          <div className="flex items-center gap-8">
            <Button name="Get Started" />
            <button className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-light">
              Learn more
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Orbits />
        </div>
      </div>

      {/* footer */}
      <div className="container mx-auto px-8 lg:px-16 pb-8">
        <div className="flex justify-between items-center text-white/40 border-t border-white/10 pt-6">
          <div className="text-sm font-light">
            Trusted by leading wholesale businesses
          </div>
          <div className="text-sm font-light">
            © 2025 My Shop
          </div>
        </div>
      </div>
    </div>
  );
}