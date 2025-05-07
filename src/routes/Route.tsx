import { RouteObject } from 'react-router-dom';
import Home from '../components/pages/Home';
import LandingLayout from '../components/layouts/Landing';
import Login from '../components/pages/Login';
import AuthLayout from '../components/layouts/Auth';
import ProtectedRoute from './ProtectedRoute';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <LandingLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: '/login',
		element: (
			<ProtectedRoute>
				<AuthLayout>
					<Login />
				</AuthLayout>
			</ProtectedRoute>
		),
	},
];

export default routes;
