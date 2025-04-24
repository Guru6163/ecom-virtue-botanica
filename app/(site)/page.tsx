import ProductGrid from "@/components/product-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { HeroSection } from "@/components/hero-section"
import { Categories } from "@/components/categories"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <FeaturedProducts />
        <Categories />
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <a href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              View All
            </a>
          </div>
          <ProductGrid />
        </section>
      </div>
    </main>
  )
}
