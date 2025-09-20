// components/Orbits.js
export default function Orbits() {
  // avatar image URLs (replace with your assets)
  const avatars = [
    { x: 220, y: 20, size: 64, url: 'https://i.pravatar.cc/128?img=32' },
    { x: 120, y: 110, size: 56, url: 'https://i.pravatar.cc/128?img=12' },
    { x: 40, y: 220, size: 64, url: 'https://i.pravatar.cc/128?img=44' },
    { x: 180, y: 300, size: 72, url: 'https://i.pravatar.cc/128?img=7' },
  ];

  // icon-cards coordinates
  const icons = [
    { x: 80, y: 40, size: 56, color: 'from-pink-500 to-red-400' },
    { x: 260, y: 160, size: 56, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <div className="relative w-[560px] h-[560px] mx-auto">
      {/* SVG concentric circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="rgba(230,231,234,0.12)" strokeWidth="1">
          <circle cx="280" cy="280" r="120" />
          <circle cx="280" cy="280" r="180" stroke="rgba(230,231,234,0.08)" />
          <circle cx="280" cy="280" r="220" stroke="rgba(230,231,234,0.06)" />
        </g>
      </svg>

      {/* center stat */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-4xl font-bold text-white">20k+</div>
        <div className="text-sm text-gray-300 mt-1">Specialists</div>
      </div>

      {/* avatars */}
      {avatars.map((a, idx) => (
        <div
          key={idx}
          className="absolute rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] ring-4 ring-white/10"
          style={{ left: a.x, top: a.y, width: a.size, height: a.size }}
        >
          <img src={a.url} alt={`avatar-${idx}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* icon-cards */}
      {icons.map((ic, idx) => (
        <div
          key={idx}
          className={`absolute rounded-xl ${ic.color} p-2 shadow-lg`}
          style={{
            left: ic.x,
            top: ic.y,
            width: ic.size,
            height: ic.size,
            background: 'linear-gradient(135deg,#0b1220,#0b1220)', // fallback
          }}
        >
          <div className="w-full h-full rounded-xl bg-black/90" />
        </div>
      ))}

      {/* decorative glowing icon on far right */}
      <div className="absolute" style={{ right: -20, top: 160 }}>
        <div className="w-20 h-20 rounded-xl bg-black/90 shadow-[0_10px_40px_rgba(255,0,140,0.18)] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-pink-400" />
        </div>
      </div>
    </div>
  );
}
