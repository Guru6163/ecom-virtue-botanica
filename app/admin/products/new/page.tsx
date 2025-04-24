import { AdminProductForm } from "@/components/admin/admin-product-form"

export const metadata = {
  title: "Add Product | Admin Dashboard",
  description: "Add a new product to your inventory",
}

export default function AdminNewProductPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Add New Product</h1>
      </div>

      <AdminProductForm />
    </div>
  )
}
