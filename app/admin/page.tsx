import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminOverviewStats } from "@/components/admin/admin-overview-stats"
import { AdminRecentOrders } from "@/components/admin/admin-recent-orders"
import { AdminRecentProducts } from "@/components/admin/admin-recent-products"
import { AdminSalesChart } from "@/components/admin/admin-sales-chart"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <AdminOverviewStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminSalesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminRecentOrders />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recently Added Products</CardTitle>
          <CardDescription>Latest products in your inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <AdminRecentProducts />
        </CardContent>
      </Card>
    </div>
  )
}
