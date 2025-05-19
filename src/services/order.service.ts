import { IOrder, IOrderResponse } from '../types/order';
import fetchAPI from '../utils/fetch';

export const OrderService = {
	getOrder: async (params?: {
		page?: number;
		pageSize?: number;
		search?: string;
		status?: string;
		sortBy?: string;
		sortOrder?: string;
	}): Promise<IOrderResponse> => {
		return await fetchAPI('/orders', {
			method: 'GET',
			query: params,
		});
	},

	getOrderDetail: async (id: string): Promise<IOrder> => {
		return await fetchAPI(`/orders/${id}`, {
			method: 'GET',
		});
	},

	createOrder: async (payload: {
		customerName: string;
		tableNumber: number;
		cart: Array<{
			menuItemId: string;
			quantity: number;
			notes?: string;
		}>;
	}) => {
		return await fetchAPI('/orders', {
			method: 'POST',
			body: JSON.stringify(payload),
		});
	},

	updateOrder: async (
		id: string,
		payload: {
			status: string;
		}
	) => {
		return await fetchAPI(`/orders/${id}`, {
			method: 'PUT',
			body: JSON.stringify(payload),
		});
	},
};
