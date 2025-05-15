import { IMenuResponse } from '../types/menu';
import { ISignatureCardResponse } from '../types/signature';
import fetchAPI from '../utils/fetch';

export const MenuService = {
	getMenu: async (params?: {
		page?: number;
		pageSize?: number;
		search?: string;
		category?: string;
		sortBy?: string;
		sortOrder?: string;
	}) => {
		return fetchAPI<IMenuResponse>('/menu', {
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
