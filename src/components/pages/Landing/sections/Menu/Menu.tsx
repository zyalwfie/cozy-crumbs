import { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { MenuService } from '../../../../../services/menu.service';
import { IMenu } from '../../../../../types/menu';
import MenuCard from '../../../../ui/MenuCard';

const Menu = () => {
	const [menus, setMenus] = useState<IMenu[]>([]);
	const params = {
		pageSize: 8,
	}

	useEffect(() => {
		const fetchMenu = async () => {
			const result = await MenuService.getMenu(params);
			setMenus(result.data);
		};
		fetchMenu();
	});

	return (
		<section className={styles.menu}>
			<div className={styles.headSection}>
				<h3>Our Delicious Menu</h3>
			</div>
			<div className={styles.menuContainer}>
				{menus.map((menu) => (
					<MenuCard
						name={menu.name}
						description={menu.description}
						image_url={menu.image_url}
						price={menu.price}
						key={menu.id}
					/>
				))}
			</div>
		</section>
	);
};

export default Menu;
