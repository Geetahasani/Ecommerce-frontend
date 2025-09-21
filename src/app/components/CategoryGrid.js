// src/components/CategoryGrid.jsx
"use client";
import Link from "next/link";

export default function CategoryGrid({ categories = [] }) {
  // Generate starburst clip-path based on your SVG reference
  const generateStarburstClipPath = (points = 16, outerRadius = 50, innerRadius = 42.5) => {
    const angleStep = Math.PI / points;
    let pathPoints = [];
    
    for (let i = 0; i < points * 2; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      pathPoints.push(`${x}% ${y}%`);
    }
    
    return `polygon(${pathPoints.join(', ')})`;
  };

  return (
    <div className="mt-6 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-3 gap-x-1 sm:gap-y-4 sm:gap-x-2">
      {categories.map((c, i) => (
        <Link
          key={i}
          href={`/categories/${c.slug}`}
          className="group flex flex-col items-center"
        >
          <div className="relative">
            {/* Perfect starburst shape using your SVG reference */}
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-white hover:bg-white transition duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 transform transition-all flex items-center justify-center"
              style={{
                clipPath: generateStarburstClipPath(16, 50, 42.5)
              }}
            >
              {/* Content inside starburst */}
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              ) : (
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full" />
              )}
            </div>
            
            {/* Item count badge */}
            <span className="absolute -top-1 -right-1 text-xs bg-purple-600 text-white px-2 py-1 rounded-full shadow-md">
              {c.count}
            </span>
          </div>
          
          {/* Text content */}
          <div className="mt-3 text-center">
            <div className="font-semibold text-sm">{c.title}</div>
            <div className="text-xs text-gray-500 mt-1">Tap to explore</div>
          </div>
        </Link>
      ))}
    </div>
  );
}