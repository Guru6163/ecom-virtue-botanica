"use client"

import { useCart } from "@/hooks/use-cart"
import Image from "next/image"

export function OrderSummary() {
  const { items, total } = useCart()

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="space-y-4 max-h-[300px] overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-md border">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium truncate">{item.name}</h4>
              <p className="text-sm text-muted-foreground">
                Qty: {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="text-right">
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${(total * 0.1).toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
          <span>Total</span>
          <span>${(total + total * 0.1).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
