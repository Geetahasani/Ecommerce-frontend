"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: brand */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <Link href="/" className="text-xl font-extrabold tracking-tight">
              Grocify<span className="text-purple-600">.</span>
            </Link>
          </div>

          {/* Center: search */}
          <form
            className="hidden md:flex flex-1 max-w-xl mx-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              placeholder="Search fruits, veggies, snacks…"
              className="w-full rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </form>

          {/* Right: quick links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/deals" className="hover:text-purple-600">Deals</Link>
            <Link href="/account" className="hover:text-purple-600">Account</Link>
            <Link href="/cart" className="relative hover:text-purple-600">
              Cart
              <span className="absolute -top-2 -right-3 text-xs bg-purple-600 text-white rounded-full px-1.5">2</span>
            </Link>
          </nav>
        </div>

        {/* Mobile search + menu */}
        <div className="md:hidden pb-3 space-y-3">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search groceries…"
              className="w-full rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </form>

          {open && (
            <nav className="flex flex-col gap-2 pt-2 border-t">
              <Link href="/deals" className="py-2">Deals</Link>
              <Link href="/account" className="py-2">Account</Link>
              <Link href="/cart" className="py-2">Cart</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
