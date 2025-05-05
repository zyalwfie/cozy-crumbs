import { ReactNode } from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
	children: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	to?: string;
};

const Button = (props: ButtonProps) => {
	const { children, type = 'button', to } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		if (to) navigate(to);
	};

	return (
		<button
			className={styles.button}
			type={type}
			onClick={to ? handleClick : undefined}
		>
			{children}
		</button>
	);
};

export default Button;
