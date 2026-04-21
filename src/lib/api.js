const BASE_URL = 'https://fakestoreapi.com'

export async function fetchProducts() {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
}


export async function fetchProductBySlug(slug) {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('API unreachable');
  
  const products = await res.json();
  
  const product = products.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!product) throw new Error('Product not found');
  return product;
}