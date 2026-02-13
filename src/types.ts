export interface Category {
    id: number,
    name: string,
}

export interface Product {
    id: number,
    name: string,
    category_name: string
}

export interface User {
    id: number,
    username: string,
    email: string
}

export interface OrderItem {
    product_id: number
    quantity: number
}

export interface Order {
    id: number,
    user_id: number,
    order_items: OrderItem[]
}

export interface Checkout {
    id: number,
    user_id: number,
    amount: number,
    order_id: number
}