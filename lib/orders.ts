import type { Order } from "./types"

// Mock data for orders
const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2023-001",
    date: "2023-06-15T10:30:00Z",
    status: "delivered",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    items: [
      {
        id: "1",
        name: "Wireless Headphones",
        description: "Premium noise-cancelling wireless headphones with long battery life.",
        price: 199.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "electronics",
        quantity: 1,
      },
      {
        id: "2",
        name: "Smart Watch",
        description: "Track your fitness and stay connected with this sleek smart watch.",
        price: 249.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "electronics",
        quantity: 1,
      },
    ],
    subtotal: 449.98,
    shipping: 10.0,
    tax: 36.0,
    total: 495.98,
    paymentMethod: "Credit Card",
  },
  {
    id: "2",
    orderNumber: "ORD-2023-002",
    date: "2023-06-18T14:45:00Z",
    status: "shipped",
    customer: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
    },
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      country: "United States",
    },
    items: [
      {
        id: "4",
        name: "Organic Cotton T-Shirt",
        description: "Comfortable and eco-friendly cotton t-shirt available in various colors.",
        price: 29.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "clothing",
        quantity: 2,
      },
    ],
    subtotal: 59.98,
    shipping: 5.0,
    tax: 5.2,
    total: 70.18,
    paymentMethod: "PayPal",
  },
  {
    id: "3",
    orderNumber: "ORD-2023-003",
    date: "2023-06-20T09:15:00Z",
    status: "processing",
    customer: {
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "+1 (555) 456-7890",
    },
    shippingAddress: {
      street: "789 Pine St",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      country: "United States",
    },
    items: [
      {
        id: "7",
        name: "Yoga Mat",
        description: "Non-slip yoga mat made from eco-friendly materials.",
        price: 39.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "fitness",
        quantity: 1,
      },
      {
        id: "8",
        name: "Stainless Steel Water Bottle",
        description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
        price: 34.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "accessories",
        quantity: 1,
      },
    ],
    subtotal: 74.98,
    shipping: 7.5,
    tax: 6.6,
    total: 89.08,
    paymentMethod: "Credit Card",
  },
  {
    id: "4",
    orderNumber: "ORD-2023-004",
    date: "2023-06-22T16:20:00Z",
    status: "pending",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 (555) 234-5678",
    },
    shippingAddress: {
      street: "321 Elm St",
      city: "Houston",
      state: "TX",
      zip: "77001",
      country: "United States",
    },
    items: [
      {
        id: "3",
        name: "Leather Backpack",
        description: "Stylish and durable leather backpack perfect for daily use or travel.",
        price: 129.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "accessories",
        quantity: 1,
      },
    ],
    subtotal: 129.99,
    shipping: 0.0,
    tax: 10.73,
    total: 140.72,
    paymentMethod: "Credit Card",
  },
  {
    id: "5",
    orderNumber: "ORD-2023-005",
    date: "2023-06-25T11:10:00Z",
    status: "cancelled",
    customer: {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      phone: "+1 (555) 876-5432",
    },
    shippingAddress: {
      street: "654 Maple Ave",
      city: "Miami",
      state: "FL",
      zip: "33101",
      country: "United States",
    },
    items: [
      {
        id: "6",
        name: "Wireless Earbuds",
        description: "Compact wireless earbuds with crystal clear sound quality.",
        price: 149.99,
        image: "/placeholder.svg?height=400&width=400",
        category: "electronics",
        quantity: 1,
      },
    ],
    subtotal: 149.99,
    shipping: 5.0,
    tax: 12.38,
    total: 167.37,
    paymentMethod: "PayPal",
  },
]

// Function to get all orders
export async function getOrders(): Promise<Order[]> {
  // Simulate API delay
  return orders
}

// Function to get a single order by ID
export async function getOrder(id: string): Promise<Order | undefined> {
  // Simulate API delay
  return orders.find((order) => order.id === id)
}

// Function to get recent orders
export async function getRecentOrders(limit: number): Promise<Order[]> {
  // Simulate API delay
  return orders.slice(0, limit)
}
