import styles from './Select.module.css';

type OptionsType = {
	children: string;
	value: string;
};

type PropsType = {
	name: string;
	id: string;
	selected: string;
	options: OptionsType[];
};

const Select = (props: PropsType) => {
	const { name, id, selected, options } = props;

	return (
		<div className={styles.wrapper}>
			<span className={styles.chevron}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					style={{ fill: 'currentcolor' }}
				>
					<path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'></path>
				</svg>
			</span>
			<select
				name={name}
				id={id}
				className={styles.select}
			>
				<option defaultValue={selected}>{selected}</option>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.children}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
