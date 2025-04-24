"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Box, Home, LayoutDashboard, Package, Settings, ShoppingBag, Tag, Users } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      title: "Categories",
      href: "/admin/categories",
      icon: Tag,
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: ShoppingBag,
    },
    {
      title: "Customers",
      href: "/admin/customers",
      icon: Users,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r">
      <div className="h-16 flex items-center border-b px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold text-lg">
          <Box className="h-6 w-6" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <Home className="h-4 w-4" />
            Back to Store
          </Link>

          <div className="mt-6 pt-6 border-t">
            {routes.map((route) => {
              const isActive = pathname === route.href

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <route.icon className="h-4 w-4" />
                  {route.title}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
