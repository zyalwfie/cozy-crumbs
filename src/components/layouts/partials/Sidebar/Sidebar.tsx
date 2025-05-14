import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Button from '../../../ui/Button';
import useNavbarStore from '../../../../stores/useNavbarStore';

const Sidebar = () => {
	const { isOpen } = useNavbarStore();

	return (
		<>
			<aside className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
				<div className={styles.brand}>
					<img
						className={styles.imgBrand}
						src='/cozy-crumbs-brand.png'
						alt='Cozy Crumbs'
					/>
				</div>
				<div className={styles.divider}></div>
				<nav className={styles.nav}>
					<NavLink
						className={({ isActive, isPending }) =>
							[
								styles.navItem,
								isPending ? styles.pending : '',
								isActive ? styles.active : '',
							].join(' ')
						}
						to='/dashboard'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							style={{ fill: 'currentColor' }}
						>
							<path d='M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z'></path>
							<path d='M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z'></path>
						</svg>
						<span>Orders</span>
					</NavLink>
					<NavLink
						className={({ isActive, isPending }) =>
							[
								styles.navItem,
								isPending ? styles.pending : '',
								isActive ? styles.active : '',
							].join(' ')
						}
						to='/dashboard/create-orders'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							style={{ fill: 'currentColor' }}
						>
							<path d='M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v3zm3-4h13v12H5V5c0-.806.55-.988 1-1z'></path>
							<path d='M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z'></path>
						</svg>
						<span>Create Orders</span>
					</NavLink>
				</nav>
				<div className={styles.adds}>
					<Button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							style={{ fill: 'currentColor' }}
						>
							<path d='m2 12 5 4v-3h9v-2H7V8z'></path>
							<path d='M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z'></path>
						</svg>
						<span>Logout</span>
					</Button>
					<Button className='support'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							style={{ fill: 'currentColor' }}
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263'
							></path>
						</svg>
						<span>Contact Support</span>
					</Button>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
