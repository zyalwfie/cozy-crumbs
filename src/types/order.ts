import { OrderStatus } from "../enum/OrderStatus";

export interface IMenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    is_available: boolean;
}

export interface IOrderCart {
    menuId: string;
    quantity: number;
    notes?: string;
    menuItem: IMenuItem;
}

export interface IOrder {
    id: string;
    customer_name: string;
    table_number: number;
    cart: IOrderCart[];
    status: OrderStatus;
    total: number;
}

export interface IOrderResponse {
    data: IOrder[],
    metadata: {
        total: number;
        page: number;
        pageSize: number;
        totalPages: number;
    }
}