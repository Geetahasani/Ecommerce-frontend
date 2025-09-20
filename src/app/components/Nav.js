// components/Nav.js
export default function Nav() {
  return (
    <header className="py-6">
      <div className="container mx-auto px-8 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-8 h-8 rounded-md bg-black/90 flex items-center justify-center text-white font-bold">M</div>
          <div className="font-medium text-xl">Marketeam</div>
          {/* <nav className="hidden md:flex gap-6 ml-8 text-sm text-gray-800">
            <a className="hover:underline" href="#">Your Team</a>
            <a className="hover:underline" href="#">Solutions</a>
            <a className="hover:underline" href="#">Blog</a>
            <a className="hover:underline" href="#">Pricing</a>
          </nav> */}
        </div>

        <div className="flex items-center gap-4">
          {/* Login button - minimal fade + slide icon */}
          <a
            href="#_"
            className="group relative inline-flex items-center px-8 py-2 rounded-full text-sm font-medium text-yellow-500 transition-transform transform hover:scale-[1.03] focus:outline-none"
            aria-label="Login"
          >
            <span className="relative z-10">Login</span>

            {/* subtle sliding icon - shifts in on hover */}
            <span className="absolute right-3 z-0 flex items-center justify-center w-6 h-6 text-yellow-500 transition-transform transform translate-x-3 group-hover:translate-x-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>

            {/* soft fade background on hover */}
            <span className="absolute inset-0 rounded-full bg-yellow-500 opacity-0 transition-opacity group-hover:opacity-10"></span>
          </a>

          {/* Register button - gentle gradient + lift */}
          <a
            href="#_"
            className="group relative inline-flex items-center px-5 py-2 rounded-full font-semibold text-white"
            style={{ background: 'linear-gradient(90deg,#7c3aed,#31167A)' }}
            aria-label="Register"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Register Now</span>

            {/* thin border that fades on hover */}
            {/* <span className="absolute inset-0 rounded-full border-2 border-yellow/70 transition-opacity opacity-60 group-hover:opacity-1"></span> */}

            {/* tiny lift on hover */}
            <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/10 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1"></span>
          </a>
        </div>
      </div>
    </header>
  );
}
