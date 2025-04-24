export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export interface CartItemType extends Product {
  quantity: number
}

export interface Category {
  title: string
  id: string
  slug: string
  image: string
  description: string
}

export interface Order {
  id: string
  orderNumber: string
  date: string
  status: string
  customer: {
    name: string
    email: string
    phone: string
  }
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  items: CartItemType[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  paymentMethod: string
}
