import { ProductCard } from "./product-card"
import { getFeaturedProducts } from "@/lib/products"

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <a href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
