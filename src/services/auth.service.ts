import { ILogin, ILoginResponse} from '../types/auth';
import fetchAPI from '../utils/fetch';

export const login = async (payload: ILogin): Promise<ILoginResponse> => {
	return await fetchAPI<ILoginResponse>('/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
	});
};
