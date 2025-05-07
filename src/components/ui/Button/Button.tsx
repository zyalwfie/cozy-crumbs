import { ReactNode } from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
	children: ReactNode;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	to?: string;
};

const Button = (props: ButtonProps) => {
	const { children, type = 'button', to, className = 'primary' } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		if (to) navigate(to);
	};

	const composedClassName = `${styles.button} ${className
		.split(' ')
		.map((cls) => styles[cls])
		.filter(Boolean)
		.join(' ')}`

	return (
		<button
			className={composedClassName}
			type={type}
			onClick={to ? handleClick : undefined}
		>
			{children}
		</button>
	);
};

export default Button;
