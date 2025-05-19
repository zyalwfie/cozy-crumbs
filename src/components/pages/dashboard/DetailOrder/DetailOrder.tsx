import { useNavigate, useParams } from 'react-router-dom';
import styles from './DetailOrder.module.css';
import { useEffect, useState } from 'react';
import { OrderService } from '../../../../services/order.service';
import { IOrder } from '../../../../types/order';

const DetailOrder = () => {
	const { id } = useParams();
	const [detailOrder, setOrder] = useState<IOrder | null>(null);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	useEffect(() => {
		const fetchOrder = async () => {
			const result = await OrderService.getOrderDetail(`${id}`);
			setOrder(result);
		};
		fetchOrder();
	}, [id]);

	useEffect(() => {
		document.title = `Crazy Crumbs | Dashboard - ${detailOrder?.customer_name}`;
	}, [detailOrder]);

	return (
		<section className={styles.detailOrder}>
			<div className={styles.container}>
				<div className={styles.detailOwner}>
					<h3 className={styles.detailOwnerName}>
						{detailOrder?.customer_name}
					</h3>
					<span className={styles.detailOwnerTableNumber}>
						Table No. {detailOrder?.table_number}
					</span>
				</div>
				<div className={styles.detailCart}>
					{detailOrder?.cart.map((item) => (
						<div className={styles.cart} key={item.menuItem.id}>
							<img
								src={item.menuItem.image_url}
								alt={item.menuItem.name}
								className={styles.itemImage}
							/>
							<div className={styles.desc}>
								<span className={styles.itemName}>
									{item.menuItem.name}
								</span>
								<span className={styles.itemPrice}>
									${item.menuItem.price}
								</span>
							</div>
						</div>
					))}
					<div className={styles.divider}></div>
					<div className={styles.detailItem}>
						{detailOrder?.cart.map((item) => (
							<div className={styles.detailName} key={item.menuItem.id}>
								<h4>{item.menuItem.name}</h4>
								<span>{item.quantity}x</span>
							</div>
						))}
						<div className={styles.detailTotal}>
							<h5>Total</h5>
							<span>${detailOrder?.total}</span>
						</div>
					</div>
					<button className={styles.backButton} onClick={handleClick}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							style={{ fill: 'currentcolor' }}
						>
							<path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z'></path>
						</svg>
						<span>Back</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default DetailOrder;
