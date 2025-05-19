import styles from './Menu.module.css';
import { MenuService } from '../../../../../services/menu.service';
import { useQuery } from '@tanstack/react-query';
import MenuCard from '../../../../ui/MenuCard';

const Menu = () => {
	const { data } = useQuery({
		queryKey: ['menu'],
		queryFn: () =>
			MenuService.getMenu({
				pageSize: 8,
			}),
	});

	return (
		<section className={styles.menu}>
			<div className={styles.headSection}>
				<h3>Our Delicious Menu</h3>
			</div>
			<div className={styles.menuContainer}>
				{data?.data.map((menu) => (
					<MenuCard
						description={menu.description}
						image_url={menu.image_url}
						name={menu.name}
						price={menu.price}
						key={menu.id}
					/>
				))}
			</div>
		</section>
	);
};

export default Menu;
