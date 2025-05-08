import { ILogin, ILoginResponse } from '../types/auth';
import fetchAPI from '../utils/fetch';

export const login = async (payload: ILogin): Promise<ILoginResponse> => {
	return fetchAPI<ILoginResponse>('/auth/login', {
		method: 'POST',
		body: JSON.stringify(payload),
	});
};
