"use client"

import { useState, useEffect } from "react"
import { getProducts } from "@/lib/products"
import type { Product } from "@/lib/types"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addProduct = async (product: Product) => {
    // In a real app, this would be an API call
    setProducts([...products, product])
    return product
  }

  const updateProduct = async (product: Product) => {
    // In a real app, this would be an API call
    setProducts(products.map((p) => (p.id === product.id ? product : p)))
    return product
  }

  const deleteProduct = async (id: string) => {
    // In a real app, this would be an API call
    setProducts(products.filter((p) => p.id !== id))
    return true
  }

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
  }
}
