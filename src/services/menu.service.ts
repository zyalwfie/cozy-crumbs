import { ISignatureCard, ISignatureCardResponse } from '../types/signature';
import fetchAPI from '../utils/fetch';

export const MenuService = {
	getMenu: async (params?: {
		category?: string;
		search?: string;
		sortBy?: string;
		sortOrder?: string;
		page?: number;
		pageSize?: number;
	}) => {
		return fetchAPI<{ data: ISignatureCard[] }>('/menu', {
			query: params,
			method: 'GET',
			skipAuth: true,
		});
	},

	getSignatureMenu: async () => {
		return fetchAPI<ISignatureCardResponse>('/menu', {
			query: {
				sortBy: 'price',
				sortOrder: 'desc',
				pageSize: 4,
			},
			method: 'GET',
			skipAuth: true,
		});
	},
};
