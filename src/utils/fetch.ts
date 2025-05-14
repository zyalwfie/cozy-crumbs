import { getLocalStorage } from './storage';

const fetchAPI = async <T>(
	url: string,
	options?: RequestInit & {
		query?: Record<string, string | number | boolean>;
		skipAuth?: boolean;
	}
): Promise<T> => {
	try {
		let finalUrl = `${import.meta.env.VITE_API_URL}${url}`;

		if (options?.query) {
			const queryParams = new URLSearchParams();
			Object.entries(options.query).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					queryParams.append(key, String(value));
				}
			});
			finalUrl += `?${queryParams.toString()}`;
		}

		const headers: HeadersInit = {
			'Content-Type': 'application/json',
		};

		if (!options?.skipAuth) {
			const token = getLocalStorage('auth');
			if (token) {
				headers.Authorization = `Bearer ${token}`;
			}
		}

		const response = await fetch(finalUrl, {
			headers,
			...options,
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Request failed');
		}

		return response.json() as Promise<T>;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error({ message: 'Fetch Error', error: error.message });
			throw error;
		} else {
			console.error({ message: 'Unknown Fetch Error', error });
			throw new Error('An unknown error occurred');
		}
	}
};

export default fetchAPI;
