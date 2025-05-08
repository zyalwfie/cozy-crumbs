import { galleryAssets } from '../../../../../constants/assets';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
		<section className={styles.gallery}>
			<div className={styles.headSection}>
				<h3 className={styles.textHead}>Brewed to Inspire<br />Every Sip</h3>
				<p className={styles.textContent}>
					Discover a richer way to enjoy your daily coffee with
					thoughtfully sourced beans, crafted flavors, and the cozy
					moments you’ve been craving.
				</p>
			</div>
            <div className={styles.contentSection}>
                {galleryAssets.map((img, index) => (
                    <img className={`${styles.imgContent} ${index === 0 ? styles.firstImg : ''}`} src={img.src} alt={img.alt} key={index} />
                ))}
            </div>
		</section>
  );
}

export default Gallery