import { RouteObject } from 'react-router-dom';
import Home from '../components/pages/Landing/Home';
import LandingLayout from '../components/layouts/Landing';
import Login from '../components/pages/Login';
import AuthLayout from '../components/layouts/Auth';
import ProtectedRoute from './ProtectedRoute';
import Order from '../components/pages/dashboard/Order';
import DashbboardLayout from '../components/layouts/Dashboard';
import DetailOrder from '../components/pages/dashboard/DetailOrder';

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
	{
		path: '/dashboard',
		element: (
			<ProtectedRoute>
				<DashbboardLayout />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: <Order />,
			},
			{
				path: 'orders/:id',
				element: <DetailOrder />,
			},
		],
	},
];

export default routes;
