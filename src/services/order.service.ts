import { IOrder, IOrderResponse } from '../types/order';
import fetchAPI from '../utils/fetch';

export const OrderService = {
	getOrder: async (): Promise<IOrderResponse> => {
		return await fetchAPI('/orders', {
			method: 'GET',
			query: {
				pageSize: 25,
				sortBy: 'customer_name',
				sortOrder: 'desc',
			},
		});
	},

	getOrderDetail: async (id: string): Promise<IOrder> => {
		return await fetchAPI(`/orders/${id}`, {
			method: 'GET',
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
