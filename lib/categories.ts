import type { Category } from "./types"


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${baseUrl}/api/categories`)
  if (!res.ok) throw new Error("Failed to fetch categories")
  return res.json()
}


// Function to get a single category by slug
export async function getCategory(slug: string) {
  
  return [];
}
