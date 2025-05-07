import { ReactNode } from 'react';
import styles from './InputLabel.module.css';

type InputLabelProps = {
	children: ReactNode;
	htmlFor: string;
};

const InputLabel = (props: InputLabelProps) => {
	const { htmlFor, children } = props;

	return (
		<label className={styles.inputLabel} htmlFor={htmlFor}>
			{children}
		</label>
	);
};

export default InputLabel;
