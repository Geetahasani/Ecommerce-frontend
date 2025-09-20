// components/Nav.js
export default function Nav() {
    return (
        <header className="py-6">
            <div className="container mx-auto px-8 lg:px-16 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-8 h-8 rounded-md bg-black/90 flex items-center justify-center text-white font-bold">M</div>
                    <div className="font-medium">Marketeam</div>
                    <nav className="hidden md:flex gap-6 ml-8 text-sm text-gray-800">
                        <a className="hover:underline" href="#">Your Team</a>
                        <a className="hover:underline" href="#">Solutions</a>
                        <a className="hover:underline" href="#">Blog</a>
                        <a className="hover:underline" href="#">Pricing</a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <a className="text-sm text-white/90">Log In</a>

                    <a href="#_" class="relative inline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group">
                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Join Now</span>
                        <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                    </a>
                </div>
            </div>
        </header>
    );
}
