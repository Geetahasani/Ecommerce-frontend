// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My E-Commerce Frontend',
  description: 'Built with Next.js + Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}