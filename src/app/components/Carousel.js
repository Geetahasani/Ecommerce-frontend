"use client";

import { useEffect, useRef, useState } from "react";

export default function Carousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const go = (dir) => {
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(timer.current);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg">
      {/* Slides */}
      <div
        className="whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            className="inline-block align-top w-full h-64 sm:h-80 md:h-96 relative"
          >
            {/* image */}
            {it.image ? (
              <img
                src={it.image}
                alt={it.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 hero-bg" />
            )}
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
            {/* text */}
            <div className="absolute left-6 right-6 bottom-6 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold drop-shadow">{it.title}</h3>
              <p className="text-sm sm:text-base opacity-90">{it.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
