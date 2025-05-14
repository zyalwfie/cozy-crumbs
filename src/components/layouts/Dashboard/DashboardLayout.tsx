import { Outlet } from 'react-router-dom';
import Sidebar from '../partials/Sidebar/Sidebar';
import styles from './DashboardLayout.module.css';
import DashboardHeader from '../partials/DashboardHeader/DashboardHeader';

const DashbboardLayout = () => {
	return (
		<div className={styles.dashboard}>
			<Sidebar />
			<DashboardHeader />
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default DashbboardLayout;
