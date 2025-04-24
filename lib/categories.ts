import type { Category } from "./types"

// Mock data for categories
const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "2",
    name: "Clothing",
    slug: "clothing",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "3",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "/placeholder.svg?height=600&width=800",
  },
]

// Function to get all categories
export async function getCategories(): Promise<Category[]> {
  // Simulate API delay
  
  return categories
}

// Function to get a single category by slug
export async function getCategory(slug: string): Promise<Category | undefined> {
  // Simulate API delay
  
  return categories.find((category) => category.slug === slug)
}
