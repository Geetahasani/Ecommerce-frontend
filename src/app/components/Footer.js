export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold">Grocify<span className="text-purple-600">.</span></div>
          <p className="text-sm text-gray-600 mt-2">
            Fresh groceries delivered fast. Daily deals and seasonal picks.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Support</h5>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Get the latest</h5>
          <form className="flex gap-2">
            <input className="flex-1 rounded-xl border px-3 py-2" placeholder="Email address" />
            <button className="rounded-xl bg-purple-600 text-white px-4 py-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Grocify. All rights reserved.
      </div>
    </footer>
  );
}
