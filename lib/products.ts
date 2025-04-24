import type { Product } from "./types"

// Mock data for products
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with long battery life.",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "electronics",
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness and stay connected with this sleek smart watch.",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "electronics",
    featured: true,
  },
  {
    id: "3",
    name: "Leather Backpack",
    description: "Stylish and durable leather backpack perfect for daily use or travel.",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and eco-friendly cotton t-shirt available in various colors.",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
    featured: true,
  },
  {
    id: "5",
    name: "Ceramic Coffee Mug",
    description: "Handcrafted ceramic coffee mug with minimalist design.",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "home",
  },
  {
    id: "6",
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with crystal clear sound quality.",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "electronics",
  },
  {
    id: "7",
    name: "Yoga Mat",
    description: "Non-slip yoga mat made from eco-friendly materials.",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "fitness",
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    featured: true,
  },
]

// Function to get all products
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  return products
}

// Function to get a single product by ID
export async function getProduct(id: string): Promise<Product | undefined> {
  // Simulate API delay
  return products.find((product) => product.id === id)
}

// Function to get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  return products.filter((product) => product.featured)
}

// Function to get recent products
export async function getRecentProducts(limit: number): Promise<Product[]> {
  // Simulate API delay
  return products.slice(0, limit)
}
