import styles from './Input.module.css';

type PropsType = {
	type?: string;
	name: string;
	id: string;
	placeholder?: string;
	required?: boolean;
};

const Input = (props: PropsType) => {
	const { type = 'button', name, id, required = false, placeholder } = props;

	return (
		<input
			className={styles.input}
			type={type}
			placeholder={placeholder}
			id={id}
			name={name}
			required={required}
		/>
	);
};

export default Input;
