import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Trendly',
  description: 'Ecommerce UI with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 font-sans">
        <Navbar />  
        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}