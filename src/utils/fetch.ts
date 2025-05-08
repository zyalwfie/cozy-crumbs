const fetchAPI = async <T>(
	url: string,
	options?: RequestInit & { query?: Record<string, string | number | boolean> }
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

		const response = await fetch(finalUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			...options,
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Request failed');
		}

		return response.json() as Promise<T>;
	} catch (error: unknown) {
		// Type guard to safely handle the error
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
