import { IMenuCard } from '../../../types/menu';
import styles from './MenuCard.module.css';

const MenuCard = (props: IMenuCard) => {
	const { image_url, name, description, price } = props;

	return (
		<>
			<article className={styles.menuCard}>
				<img className={styles.image} src={image_url} alt={name} />
				<div className={styles.detailContainer}>
					<h4 className={styles.name}>{name}</h4>
					<p className={styles.description}>{description}</p>
				</div>
				<span className={styles.price}>${price}</span>
			</article>
		</>
	);
};

export default MenuCard;
