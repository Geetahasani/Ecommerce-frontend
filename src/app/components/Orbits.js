// components/Orbits.js
export default function Orbits() {
  const avatars = [
    { size: 64, url: 'https://i.pravatar.cc/128?img=32', radius: 180, speed: 'spin-slower' },
    { size: 56, url: 'https://i.pravatar.cc/128?img=12', radius: 120, speed: 'spin-slow' },
    { size: 64, url: 'https://i.pravatar.cc/128?img=44', radius: 220, speed: 'spin-medium' },
    { size: 72, url: 'https://i.pravatar.cc/128?img=7', radius: 300, speed: 'spin-fast' },
  ];

  return (
    <div className="relative w-[560px] h-[560px] mx-auto">
      {/* orbit circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 560">
        <g fill="none" stroke="rgba(230,231,234,0.12)" strokeWidth="1">
          <circle cx="280" cy="280" r="120" />
          <circle cx="280" cy="280" r="180" stroke="rgba(230,231,234,0.08)" />
          <circle cx="280" cy="280" r="220" stroke="rgba(230,231,234,0.06)" />
          <circle cx="280" cy="280" r="260" stroke="rgba(230,231,234,0.04)" />
        </g>
      </svg>

      {/* center stat */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="text-4xl font-bold text-white">200+</div>
        <div className="text-sm text-gray-300 mt-1">Products</div>
      </div>

      {/* orbiting avatars */}
      {avatars.map((a, idx) => {
        const startAngles = [0, 90, 180, 270]; // top, right, bottom, left
        const angle = startAngles[idx % startAngles.length];

        return (
          <div
            key={idx}
            className={`absolute left-1/2 top-1/2 ${a.speed}`}
            style={{
              width: 0,
              height: 0,
              transformOrigin: 'center',
              transform: `rotate(${angle}deg)`, // start position
            }}
          >
            <div
              className="absolute rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] ring-4 ring-white/10"
              style={{
                top: `-${a.radius}px`, // distance = orbit radius
                left: `-${a.size / 2}px`,
                width: a.size,
                height: a.size,
                animation: 'spin-reverse 40s linear infinite', // keeps upright
              }}
            >
              <img
                src={a.url}
                alt={`avatar-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
