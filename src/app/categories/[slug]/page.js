// src/app/categories/[slug]/page.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { categories, itemsByCategory } from "../../components/Catalog";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const { slug } = params;
  const cat = categories.find(c => c.slug === slug);
  const items = itemsByCategory[slug] || [];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              {cat ? cat.title : "Category"}
            </h1>
            <p className="text-gray-500">
              {items.length} item{items.length !== 1 ? "s" : ""} found
            </p>
          </div>
          <Link href="/" className="text-purple-700 hover:underline text-sm">← Back to Home</Link>
        </div>

        {items.length === 0 ? (
          <div className="mt-10 text-gray-500">
            No items in this category yet.
          </div>
        ) : (
          <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={i} p={p} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
