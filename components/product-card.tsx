"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/types"

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative rounded-lg border bg-background overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block aspect-square relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-medium truncate">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => addItem({ ...product, quantity: 1 })}>
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex flex-col gap-2 p-4">
            <Button className="w-full" onClick={() => addItem({ ...product, quantity: 1 })}>
              Add to Cart
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
