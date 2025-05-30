import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"

export const metadata = {
  title: "Shopping Cart | Modern E-commerce",
  description: "View your shopping cart",
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
