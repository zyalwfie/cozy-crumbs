import styles from './CreateOrder.module.css';
import { useQuery } from '@tanstack/react-query';
import { MenuService } from '../../../../services/menu.service';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { categories } from '../../../../constants/assets';
import { FormEvent, useEffect, useState } from 'react';
import InputLabel from '../../../ui/InputLabel';
import Input from '../../../ui/Input';
import Select from '../../../ui/Select';
import { CartItem } from '../../../../types/order';
import Button from '../../../ui/Button';
import { OrderService } from '../../../../services/order.service';

const CreateOrder = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedCategory = searchParams.get('category') || 'All';
	const [carts, setCarts] = useState<CartItem[]>([]);
	const navigate = useNavigate();

	const handleCategoryClick = (category: string) => {
		if (category === 'All') {
			searchParams.delete('category');
			setSearchParams(searchParams);
		} else {
			searchParams.set('category', category);
			setSearchParams(searchParams);
		}
	};

	const { data } = useQuery({
		queryKey: ['menu', selectedCategory],
		queryFn: () =>
			MenuService.getMenu({
				category:
					selectedCategory !== 'All' ? selectedCategory : undefined,
			}),
	});

	const handleAddToCart = (
		type: string,
		id: string,
		name: string,
		image_url: string
	) => {
		const itemIsInCart = carts.find((item: CartItem) => item.id === id);
		if (type === 'increment') {
			if (itemIsInCart) {
				setCarts(
					carts.map((item: CartItem) =>
						item.id === id
							? { ...item, quantity: item.quantity + 1 }
							: item
					)
				);
			} else {
				setCarts([...carts, { id, name, image_url, quantity: 1 }]);
			}
		} else {
			if (itemIsInCart && itemIsInCart.quantity <= 1) {
				setCarts(carts.filter((item: CartItem) => item.id !== id));
			} else {
				setCarts(
					carts.map((item: CartItem) =>
						item.id === id
							? { ...item, quantity: item.quantity - 1 }
							: item
					)
				);
			}
		}
	};

	const handleOrder = async (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const payload = {
			customerName: form.customerName.value,
			tableNumber: form.tableNumber.value,
			cart: carts.map((item: CartItem) => ({
				menuItemId: item.id,
				quantity: item.quantity,
				notes: '',
			})),
		};
		await OrderService.createOrder(payload);
		return navigate('/dashboard/orders');
	};

	useEffect(() => {
		document.title = 'Crazy Crumbs | Dashboard - Create Orders';
	}, []);

	return (
		<section className={styles.createOrder}>
			<form className={styles.form} onSubmit={handleOrder}>
				<div className={styles.customerContainer}>
					<h3 className={styles.customerInformation}>
						Customer Information
					</h3>
					<div className={styles.inputContainer}>
						<InputLabel htmlFor='name'>Name</InputLabel>
						<Input
							id='customerName'
							name='customerName'
							placeholder='Write your name'
							type='text'
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<InputLabel htmlFor='table'>Table Number</InputLabel>
						<Select
							name='tableNumber'
							id='tableNumber'
							selected='Choose the table number'
							options={[
								{ children: '1', value: '1' },
								{ children: '2', value: '2' },
								{ children: '3', value: '3' },
								{ children: '4', value: '4' },
								{ children: '5', value: '5' },
							]}
						/>
					</div>
				</div>
				<div className={styles.cartWrapper}>
					<h4 className={styles.cartTitle}>Carts</h4>
					<div className={styles.cartContainer}>
						{carts.length > 0 ? (
							carts.map((item: CartItem) => (
								<div className={styles.cart} key={item.id}>
									<div className={styles.cartDetails}>
										<img
											src={item.image_url}
											alt={item.name}
											className={styles.cartImage}
										/>
										<h5 className={styles.cartName}>
											{item.name}
										</h5>
									</div>
									<div className={styles.cartQuantity}>
										<button
											type='button'
											className={styles.decrementBtn}
											onClick={() =>
												handleAddToCart(
													'decrement',
													item.id,
													item.name,
													item.image_url
												)
											}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												style={{
													fill: 'currentcolor',
												}}
											>
												<path d='M5 11h14v2H5z'></path>
											</svg>
										</button>
										<span className={styles.quantity}>
											{item.quantity}
										</span>
										<button
											type='button'
											className={styles.incrementBtn}
											onClick={() =>
												handleAddToCart(
													'increment',
													item.id,
													item.name,
													item.image_url
												)
											}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												style={{
													fill: 'currentcolor',
												}}
											>
												<path d='M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z'></path>
											</svg>
										</button>
									</div>
								</div>
							))
						) : (
							<div className={styles.cart}>
								<h4>No orders here</h4>
							</div>
						)}
					</div>
					<Button type='submit'>Order</Button>
				</div>
			</form>
			<div className={styles.menu}>
				<div className={styles.filtersWrapper}>
					<div className={styles.filtersContainer}>
						{categories.map((category) => (
							<button
								onClick={() => handleCategoryClick(category)}
								key={category}
								className={
									selectedCategory === category
										? `${styles.button} ${styles.active}`
										: styles.button
								}
							>
								{category}
							</button>
						))}
					</div>
					<div className={styles.leftMask}></div>
					<div className={styles.rightMask}></div>
				</div>
				<div className={styles.cardContainer}>
					{data?.data.map((menu) => (
						<div className={styles.card} key={menu.id}>
							<div className={styles.detailsContainer}>
								<div className={styles.cardImageContainer}>
									<img
										src={menu.image_url}
										alt={menu.name}
										className={styles.cardImage}
									/>
								</div>
								<div className={styles.cardContent}>
									<div className={styles.contentDetails}>
										<h4 className={styles.name}>
											{menu.name}
										</h4>
										<p className={styles.description}>
											{menu.description}
										</p>
									</div>
								</div>
							</div>
							<div className={styles.cardFooter}>
								<div className={styles.footerContent}>
									<div className={styles.price}>
										${menu.price}
									</div>
									<button
										className={styles.cartButton}
										onClick={() =>
											handleAddToCart(
												'increment',
												menu.id,
												menu.name,
												menu.image_url
											)
										}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											style={{ fill: 'currentcolor' }}
										>
											<circle
												cx='10.5'
												cy='19.5'
												r='1.5'
											></circle>
											<circle
												cx='17.5'
												cy='19.5'
												r='1.5'
											></circle>
											<path d='M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z'></path>
											<path d='M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z'></path>
										</svg>
										<span>Add</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CreateOrder;
