import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../../../ui/Button';
import { useState } from 'react';
import { navTextContent } from '../../../../constants/assets';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<header className={styles.header}>
			<div className={styles.headerBrandContainer}>
				<img
					className={styles.headerBrand}
					src='/cozy-crumbs-brand-white.png'
					alt='Cozy Crumbs'
				/>
				<button onClick={handleClick} className={styles.buttonShow}>
					<i className='bx bx-menu'></i>
				</button>
			</div>

			<nav className={`${styles.headerNav} ${open ? styles.show : ''}`}>
				<div className={styles.buttonCloseContainer}>
					<button
						onClick={handleClick}
						className={styles.buttonClose}
					>
						<i className='bx bx-x'></i>
					</button>
				</div>
				<div className={styles.headerBrandContainerNav}>
					<img
						className={styles.headerBrand}
						src='/cozy-crumbs-brand-white.png'
						alt='Cozy Crumbs'
					/>
				</div>
				<ul className={styles.headerNavLinkContainer}>
					{navTextContent.map((navItem) => (
						<NavLink
							to={navItem.path}
							className={({ isActive, isPending }) =>
								[
									styles.headerNavLink,
									isPending ? styles.pending : '',
									isActive ? styles.active : '',
								].join(' ')
							}
							key={navItem.id}
						>
							{navItem.text}
						</NavLink>
					))}
					<div className={styles.divider}></div>
					<Button to='/dashboard/orders' variant='secondary'>
						Buy Some
					</Button>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
