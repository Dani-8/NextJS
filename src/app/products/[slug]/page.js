import { fetchProductById } from '@/lib/api';

export default async function ProductDetailPage({ params }) {
  const product = await fetchProductById(params.slug);

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

      <div className="bg-slate-50 rounded-3xl p-10 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[450px] object-contain"
        />
      </div>

      <div className="flex flex-col py-4 space-y-6">

        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {product.category}
        </span>

        <h1 className="text-4xl font-black leading-tight">
          {product.title}
        </h1>

        <div className="flex items-center gap-3">
          <span className="bg-black text-white px-3 py-1 text-xs rounded">
            ★ {product.rating?.rate}
          </span>
        </div>

        <p className="text-slate-600 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto pt-6 border-t flex items-center justify-between">
          <span className="text-3xl font-black">
            ${product.price}
          </span>

          <button className="bg-black text-white px-10 py-4 rounded-full font-bold">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}