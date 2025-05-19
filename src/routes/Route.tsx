import { RouteObject } from 'react-router-dom';
import Home from '../components/pages/Landing/Home';
import LandingLayout from '../components/layouts/Landing';
import Login from '../components/pages/Login';
import AuthLayout from '../components/layouts/Auth';
import ProtectedRoute from './ProtectedRoute';
import Order from '../components/pages/dashboard/Order';
import DashbboardLayout from '../components/layouts/Dashboard';
import DetailOrder from '../components/pages/dashboard/DetailOrder';
import CreateOrder from '../components/pages/dashboard/CreateOrder';

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
				path: 'orders',
				children: [
					{
						index: true,
						element: <Order />
					},
					{
						path: ':id',
						element: <DetailOrder />
					}
				]
			},
			{
				path: 'create-orders',
				element: <CreateOrder />
			},
			{
				path: ':id',
				element: <DetailOrder />,
			},
		],
	},
];

export default routes;
