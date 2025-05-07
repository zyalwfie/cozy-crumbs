import styles from './Home.module.css';

const Home = () => {
	return (
		<>
			<main className={styles.home}>
				<h1 className={styles.headerText}>
					brewed for comfort
					<br />
					baked with love
				</h1>
				<p className={styles.descText}>
					A cozy space where bold coffee, warm vibes, and delightful
					desserts come together for your perfect break.
				</p>
				<div className={styles.imgWrapper}>
					<div className={styles.contentWrapper}>
						<img
							className={styles.img}
							src='/img/hero-img.jpg'
							alt='3 Cup of Coffe'
						/>
						<div className={styles.tag}>
							<img className={styles.contentBrand} src="/tag.png" alt="Cozy Crumbs" />
						</div>
					</div>
				</div>
				<div className={styles.test}></div>
			</main>
		</>
	);
};

export default Home;
