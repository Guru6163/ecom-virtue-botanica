import Link from "next/link"
import Image from "next/image"
import { getRecentProducts } from "@/lib/products"

export async function AdminRecentProducts() {
  const products = await getRecentProducts(5)

  return (
    <div className="space-y-4">
      {products.length === 0 ? (
        <p className="text-center text-muted-foreground py-4">No recent products</p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/admin/products/${product.id}`} className="font-medium hover:underline truncate block">
                  {product.name}
                </Link>
                <span className="text-sm text-muted-foreground">{product.category}</span>
              </div>
              <div className="font-medium">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center">
        <Link href="/admin/products" className="text-sm text-blue-600 hover:underline">
          View all products
        </Link>
      </div>
    </div>
  )
}
