const BASE_URL = 'https://fakestoreapi.com'

export async function fetchProducts() {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
}

export async function fetchProductBySlug(slug) {
    const res = await fetch(`${BASE_URL}/products/${slug}`)
    
    if (!res.ok) throw new Error('Failed to fetch product')
    return res.json()
}