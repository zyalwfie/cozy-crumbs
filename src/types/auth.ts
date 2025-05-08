interface ILogin {
	email: string;
	password: string;
}

interface ILoginResponse {
	token: string;
}

export type { ILogin, ILoginResponse };
