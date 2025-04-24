import Link from "next/link"
import Image from "next/image"
import { getCategories } from "@/lib/categories"

export async function Categories() {
  const categories = await getCategories()

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group relative rounded-lg overflow-hidden aspect-[4/3]"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
