import { AdminOrdersTable } from "@/components/admin/admin-orders-table"

export const metadata = {
  title: "Orders | Admin Dashboard",
  description: "Manage customer orders",
}

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Orders</h1>
      </div>

      <AdminOrdersTable />
    </div>
  )
}
