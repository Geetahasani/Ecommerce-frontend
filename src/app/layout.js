// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My E-Commerce Frontend',
  description: 'Built with Next.js + Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold text-blue-600">My Shop</h1>
        </header>

        <main className="p-6">{children}</main>

        <footer className="bg-white border-t text-center text-sm text-gray-500 p-4">
          © 2025 My Shop
        </footer>
      </body>
    </html>
  );
}
