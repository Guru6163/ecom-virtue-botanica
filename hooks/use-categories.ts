"use client"

import { useState, useEffect, useCallback } from "react"
import { getCategories } from "@/lib/categories"
import type { Category } from "@/lib/types"

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getCategories()
      console.log("Fetched categories:", data)
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
      setCategories([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return {
    categories,
    loading,
    refetchCategories: fetchCategories
  }
}
