import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <div className="bg-black p-1.5 rounded text-white">
            <ShoppingBag size={18} />
          </div>
          <span className="font-bold tracking-tighter text-xl italic">
            TRENDLY
          </span>
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link href="/" className="text-slate-400 hover:text-black">Home</Link>
          <Link href="/products" className="text-slate-400 hover:text-black">Products</Link>
          <Link href="/about" className="text-slate-400 hover:text-black">About</Link>
        </div>

      </div>
    </nav>
  );
}