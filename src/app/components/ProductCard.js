export default function ProductCard({ p }) {
  return (
    <div className="group rounded-2xl border bg-white hover:shadow-lg transition overflow-hidden">
      <div className="relative aspect-[4/3]">
        {p.image ? (
          <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full hero-bg" />
        )}
        {p.badge && (
          <span className="absolute left-2 top-2 text-xs font-semibold bg-purple-600 text-white px-2 py-1 rounded-full">
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold">{p.name}</h4>
          <span className="font-bold text-purple-700">${p.price}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">{p.desc}</p>
        <button className="mt-3 w-full rounded-xl bg-purple-600 text-white py-2 hover:bg-purple-700">
          Add to cart
        </button>
      </div>
    </div>
  );
}
