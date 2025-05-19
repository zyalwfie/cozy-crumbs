import { Link, useLocation } from 'react-router-dom';
import { OrderStatus } from '../../../../enum/OrderStatus';
import { OrderService } from '../../../../services/order.service';
import { IOrder } from '../../../../types/order';
import styles from './Order.module.css';
import { useEffect, useState } from 'react';

const Order = () => {
	const [orders, setOrders] = useState<IOrder[]>([]);
	const [refetchOrder, setRefetchOrder] = useState(true);
	const location = useLocation();

	const handleCompleteOrder = async (id: string) => {
		await OrderService.updateOrder(id, { status: 'COMPLETED' }).then(() => {
			setRefetchOrder(true);
		});
	};

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const response = await OrderService.getOrder();
				setOrders(response.data);
			} catch (err) {
				console.error('Failed to load orders!', err);
			}
		};
		if (refetchOrder) {
			fetchOrder();
			setRefetchOrder(false);
		}
	}, [refetchOrder]);

	useEffect(() => {
		document.title = 'Crazy Crumbs | Dashboard - Orders';
	}, []);

	return (
		<>
			<div className={styles.headContainer}>
				<h1 className={styles.textHeadTable}>List Orders</h1>
			</div>
			<section className={styles.order}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>No.</th>
							<th>Customer Name</th>
							<th>Table Number</th>
							<th>Status</th>
							<th>Total</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<tr key={order.id}>
								<th>{index + 1}</th>
								<td>{order.customer_name}</td>
								<td>{order.table_number}</td>
								<td>{order.status}</td>
								<td>${order.total}</td>
								<td className={styles.action}>
									<Link
										className={styles.detailButton}
										to={`${order.id}`}
										state={{ background: location }}
									>
										Detail
									</Link>
									{order.status ===
										OrderStatus.processing && (
										<button
											onClick={() => {
												handleCompleteOrder(order.id);
											}}
										>
											Completed
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</>
	);
};

export default Order;
