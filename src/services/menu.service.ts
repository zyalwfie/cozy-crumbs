import { IMenu } from '../types/menu';
import { ISignatureCardResponse } from '../types/signature';
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
		return fetchAPI<{ data: IMenu[] }>('/menu', {
			method: 'GET',
			query: params,
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
