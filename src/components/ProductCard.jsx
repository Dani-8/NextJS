import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="group space-y-3">

      <div className="aspect-[3/4] bg-slate-50 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition"
        />
      </div>

      <h3 className="text-sm font-bold line-clamp-1 group-hover:underline">
        {product.title}
      </h3>

      <p className="text-xs text-slate-400 font-bold">
        ${product.price}
      </p>

    </Link>
  );
}