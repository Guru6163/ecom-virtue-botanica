import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminProductsTable } from "@/components/admin/admin-products-table"
import { PlusCircle } from "lucide-react"

export const metadata = {
  title: "Products | Admin Dashboard",
  description: "Manage your product inventory",
}

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <AdminProductsTable />
    </div>
  )
}
