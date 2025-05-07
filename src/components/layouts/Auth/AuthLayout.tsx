import { ReactNode } from 'react';
import styles from './AuthLayout.module.css';

type AuthLayoutProps = {
	children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<main className={styles.authLayout}>
			<section className={styles.leftContent}>
				<div className={styles.overlayImg}></div>
				<div className={styles.brandContainer}>
					<img
						src='/cozy-crumbs-brand-white.png'
						alt='Cozy Crumbs'
						className={styles.brand}
					/>
				</div>
				<div className={styles.content}>
					<h3>
						<q>
							The kind of place that makes you slow down and savor
							every sip and crumb.
						</q>
					</h3>
					<div className={styles.quoteAuthorContainer}>
						<p>Ziyad Alwafie</p>
						<span>Fullstack Developer & Coffee Addict</span>
					</div>
				</div>
			</section>

			<section className={styles.rightContent}>{children}</section>
		</main>
	);
};

export default AuthLayout;
