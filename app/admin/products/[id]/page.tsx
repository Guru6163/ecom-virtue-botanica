import { AdminProductForm } from "@/components/admin/admin-product-form"
import { getProduct } from "@/lib/products"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found | Admin Dashboard",
    }
  }

  return {
    title: `Edit ${product.name} | Admin Dashboard`,
  }
}

export default async function AdminEditProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Product</h1>
      </div>

      <AdminProductForm product={product} />
    </div>
  )
}
