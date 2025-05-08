import { ISignatureCard } from '../../../types/signature';
import styles from './SignatureCard.module.css';

const SignatureCard = (props: ISignatureCard) => {
	const {
		id,
		name,
		price,
		image_url,
		category,
		is_available = false,
		className,
	} = props;

	return (
		<article
			className={`${styles.signatureCard} ${
				className?.includes('borderLess')
					? styles.borderLess
					: styles.border
			}`}
			data-id={id}
		>
			<div className={styles.headCard}>
				<div className={styles.categoryContainer}>
					<span>{category}</span>
					{is_available ? (
						<span className={styles.isAvailable}>
							<i className='bx bxs-circle'></i>
						</span>
					) : (
						<span className={styles.notAvailable}>
							<i className='bx bxs-circle'></i>
						</span>
					)}
				</div>
			</div>
			<div className={styles.contentCard}>
				<img className={styles.contentImg} src={image_url} alt={name} />
			</div>
			<div className={styles.footerCard}>
				<h3 className={styles.price}>${price}</h3>
				<p className={styles.signatureName}>{name}</p>
			</div>
		</article>
	);
};

export default SignatureCard;
