import { FormEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import InputLabel from '../../ui/InputLabel';
import styles from './Login.module.css';
import { login } from '../../../services/auth.service';
import { setLocalStorage } from '../../../utils/storage';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import { useMutation } from '@tanstack/react-query';

const Login = () => {
	const navigate = useNavigate();

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			setLocalStorage('auth', data.token);
			navigate('/dashboard/orders');
		},
		onError: (err) => {
			console.error(err);
		},
	});

	const handleLogin = async (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const payload = {
			email: form.email.value,
			password: form.password.value,
		};
		mutate(payload);
	};

	return (
		<section>
			<form className={styles.login} onSubmit={handleLogin}>
				<div className={styles.headerLogin}>
					<h1 className={styles.headerText}>
						Welcome back to{' '}
						<img
							className={styles.brand}
							src='/cozy-crumbs-brand.png'
							alt='Cozy Crumbs'
						/>
					</h1>
					<p className={styles.descText}>
						Let’s get you to the good stuff, coffee, crumbs, and
						comfort.
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.inputContainer}>
						<InputLabel htmlFor='email'>Email</InputLabel>
						<Input
							type='email'
							name='email'
							placeholder='Write your email'
							id='email'
						/>
					</div>
					<div className={styles.inputContainer}>
						<InputLabel htmlFor='password'>Password</InputLabel>
						<Input
							type='password'
							name='password'
							placeholder='Write your password'
							id='password'
						/>
					</div>
				</div>
				<div className={styles.footerLogin}>
					<Button type='submit' className='wFull'>
						{isPending ? <Spinner /> : 'Log in'}
					</Button>
					{isError && (
						<p className={styles.errMsg}>
							{error?.message ?? 'Login failed. Please try again.'}
						</p>
					)}
				</div>
			</form>
		</section>
	);
};

export default Login;
