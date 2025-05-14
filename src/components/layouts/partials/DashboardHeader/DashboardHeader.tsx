import styles from './DashboardHeader.module.css';
import useNavbarStore from '../../../../stores/useNavbarStore';

const DashboardHeader = () => {
	const { isOpen, toggleNavbar } = useNavbarStore();

	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.textHeader}>Dashboard</h1>
				<button className={styles.buttonShow} onClick={toggleNavbar}>
					{isOpen ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							style={{ fill: 'currentcolor' }}
						>
							<path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							style={{ fill: 'currentColor' }}
						>
							<path d='M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z'></path>
						</svg>
					)}
				</button>
				<button className={styles.buttonAvatar}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						style={{ fill: 'currentColor' }}
					>
						<path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
					</svg>
				</button>
			</header>
		</>
	);
};

export default DashboardHeader;
