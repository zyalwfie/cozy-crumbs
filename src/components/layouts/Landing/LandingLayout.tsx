import { Outlet } from 'react-router-dom';
import Header from '../partials/Header/Header';
import Footer from '../partials/Footer';

const LandingLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default LandingLayout;
