import { useQuery } from '@tanstack/react-query';
import { MenuService } from '../../../../../services/menu.service';
import SignatureCard from '../../../../ui/SignatureCard';
import styles from './Signature.module.css';

const Signatures = () => {
	const { data } = useQuery({
		queryKey: ['signatureMenu'],
		queryFn: MenuService.getSignatureMenu,
	});

	return (
		<section className={styles.signature}>
			<h1 className={styles.textHeadSection}>Our Signatures</h1>
			<div className={styles.containerCard}>
				{data?.data.map((item, index) => (
					<SignatureCard
						key={item.id}
						id={item.id}
						name={item.name}
						category={item.category}
						image_url={item.image_url}
						price={item.price}
						is_available={item.is_available}
						className={`
      ${index === data.data.length - 1 ? 'border' : 'borderLess'}
    `}
					/>
				))}
			</div>
		</section>
	);
};

export default Signatures;
