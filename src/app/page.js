import Link from 'next/link';
import { Zap, Globe, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-24 py-10">

      <section className="text-center space-y-8 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold tracking-widest uppercase">
          Spring Collection 2024
        </div>

        <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
          QUALITY STUFF. <br />
          <span className="text-slate-400 font-light italic">
            NO COMPROMISE.
          </span>
        </h1>

        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          A curated selection of the world's finest essentials.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/products" className="bg-black text-white px-8 py-4 rounded-full font-bold">
            Explore Catalog
          </Link>

          <Link href="/about" className="border border-slate-200 px-8 py-4 rounded-full font-bold">
            Our Story
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-20">
        <div className="text-center">
          <Zap className="mx-auto mb-4" />
          <h3 className="font-bold">Fast Shipping</h3>
        </div>

        <div className="text-center">
          <Globe className="mx-auto mb-4" />
          <h3 className="font-bold">Eco Conscious</h3>
        </div>

        <div className="text-center">
          <ShieldCheck className="mx-auto mb-4" />
          <h3 className="font-bold">Secure Payments</h3>
        </div>
      </section>

    </div>
  );
}