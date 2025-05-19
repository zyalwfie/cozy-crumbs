import { ReactNode } from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

type ButtonProps = {
	children: ReactNode;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	to?: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
};

const Button = (props: ButtonProps) => {
	const {
		children,
		type = 'button',
		to,
		className,
		variant = 'primary',
		onClick,
	} = props;
	const navigate = useNavigate();

	const handleClick = () => {
		if (to) navigate(to);
	};

	const composedClassName = clsx(
		styles.button,
		variant && styles[variant],
		className && styles[className]
	);

	return (
		<button
			className={composedClassName}
			type={type}
			onClick={to ? handleClick : onClick}
		>
			{children}
		</button>
	);
};

export default Button;
