export interface IMenuCard {
	image_url: string;
	name: string;
	description: string;
	price: number;
}

export interface IMenu {
	id: string;
	name: string;
	description: string;
	price: number;
	image_url: string;
	category: string;
	is_available?: boolean;
}

export interface IMenuResponse {
	data: IMenu[];
	metadata: {
		total: number;
		page: number;
		pageSize: number;
		totalPages: number;
	};
}
