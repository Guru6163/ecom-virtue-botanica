import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminCategoriesTable } from "@/components/admin/admin-categories-table"
import { PlusCircle } from "lucide-react"

export const metadata = {
  title: "Categories | Admin Dashboard",
  description: "Manage your product categories",
}

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Button asChild>
          <Link href="/admin/categories/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Category
          </Link>
        </Button>
      </div>

      <AdminCategoriesTable />
    </div>
  )
}
