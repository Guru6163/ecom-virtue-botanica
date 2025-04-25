import type { Product } from "./types"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

// Function to get all products
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  const res = await fetch(`${baseUrl}/api/products`)
  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

// Function to get a single product by ID
export async function getProduct(id: string) {
  // Simulate API delay
  return []
}

// Function to get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  return []
}

// Function to get recent products
export async function getRecentProducts(limit: number) {
  // Simulate API delay
  return []
}
