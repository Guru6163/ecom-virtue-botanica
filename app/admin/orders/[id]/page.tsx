import { AdminOrderDetails } from "@/components/admin/admin-order-details"
import { getOrder } from "@/lib/orders"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const order = await getOrder(params.id)

  if (!order) {
    return {
      title: "Order Not Found | Admin Dashboard",
    }
  }

  return {
    title: `Order #${order.orderNumber} | Admin Dashboard`,
  }
}

export default async function AdminOrderDetailsPage({ params }: { params: { id: string } }) {
  const order = await getOrder(params.id)

  if (!order) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Order #{order.orderNumber}</h1>
      </div>

      <AdminOrderDetails order={order} />
    </div>
  )
}
