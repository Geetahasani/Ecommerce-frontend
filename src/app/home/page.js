import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import CategoryGrid from "../components/CategoryGrid";
import { categories } from "../components/Catalog";

const trending = [
  { title: "Fresh Summer Fruits", subtitle: "Mangoes, berries & more — up to 30% off", image: "/hero-fruits.jpg" },
  { title: "Breakfast Essentials", subtitle: "Cereals, milk & spreads — bundle and save", image: "/hero-breakfast.jpg" },
  { title: "Organic Greens", subtitle: "Locally sourced veggies, delivered daily", image: "/hero-greens.jpg" },
];

const mostSold = [
  { name: "Tomatoes (500g)", price: 1.29, desc: "Juicy & ripe", image: "/p-tomato.jpg" },
  { name: "Onions (1kg)", price: 1.99, desc: "Kitchen staple", image: "/p-onion.jpg" },
  { name: "Milk (1L)", price: 1.49, desc: "Farm fresh", image: "/p-milk.jpg" },
  { name: "Brown Eggs (12)", price: 2.99, desc: "Free range", image: "/p-eggs.jpg" },
  { name: "Olive Oil (500ml)", price: 6.49, desc: "Extra virgin", image: "/p-olive.jpg" },
  { name: "Basmatí Rice (1kg)", price: 3.49, desc: "Long grain", image: "/p-rice.jpg" },
  { name: "Apples (6pc)", price: 2.89, desc: "Crisp & sweet", image: "/p-apple.jpg" },
  { name: "Spinach (250g)", price: 1.19, desc: "Washed & ready", image: "/p-spinach.jpg" },
];

export default function Home() {
  const customGradientStyle = {
    background: `
      radial-gradient(circle at top , rgba(255,214,165,0.9) 0%, rgba(168,85,247,0.85) 65%),
      radial-gradient(circle at bottom right, rgba(255,214,165,0.9) 0%, rgba(168,85,247,0.85) 65%),
      radial-gradient(circle at bottom left, rgba(255,214,165,0.9) 0%, rgba(168,85,247,0.85) 65%),
      radial-gradient(800px 600px at 10% 12%, rgba(255,214,165,0.9) 0%, rgba(168,85,247,0.85) 65%),
      linear-gradient(to bottom, transparent, transparent)
    `
  };

  return (
    <main className="min-h-screen" style={customGradientStyle}>
      <Navbar />

      {/* Top banner / carousel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <Carousel items={trending} />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">Shop by Category</h2>
          <a href="/categories/rice" className="text-purple-700 hover:underline text-sm">See all</a>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      {/* Most sold */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">Most Sold</h2>
          <a href="#" className="text-purple-700 hover:underline text-sm">Browse catalog</a>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {mostSold.map((p, i) => (
            <ProductCard key={i} p={p} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
