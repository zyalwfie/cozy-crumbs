import { Outlet } from 'react-router-dom';
import Header from '../partials/Header';

const LandingLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default LandingLayout;
