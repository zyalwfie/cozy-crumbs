import { RouteObject } from 'react-router-dom';
import Home from '../components/pages/Home';
import LandingLayout from '../components/layouts/Landing';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <LandingLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
		],
	},
];

export default routes;
