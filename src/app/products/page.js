import { fetchProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black tracking-tighter uppercase">
          Catalog
        </h1>
        <p className="text-slate-500 italic">
          Live inventory from server
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}