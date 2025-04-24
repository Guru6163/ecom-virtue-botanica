import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getRecentOrders } from "@/lib/orders"

export async function AdminRecentOrders() {
  const orders = await getRecentOrders(5)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
            Pending
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
            Processing
          </Badge>
        )
      case "shipped":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
            Shipped
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
            Delivered
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {orders.length === 0 ? (
        <p className="text-center text-muted-foreground py-4">No recent orders</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div className="flex flex-col">
                <Link href={`/admin/orders/${order.id}`} className="font-medium hover:underline">
                  #{order.orderNumber}
                </Link>
                <span className="text-sm text-muted-foreground">{order.customer.name}</span>
              </div>
              <div className="flex items-center gap-4">
                {getStatusBadge(order.status)}
                <span className="font-medium">${order.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center">
        <Link href="/admin/orders" className="text-sm text-blue-600 hover:underline">
          View all orders
        </Link>
      </div>
    </div>
  )
}
