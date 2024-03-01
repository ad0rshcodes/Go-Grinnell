import React from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/Signup.module.css"; // Import the CSS module

const Signup = () => {
	const router = useRouter(); // Initialize the router

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission behavior
		// Here you can add form validation or other operations before redirecting

		router.push("/landing"); // Redirect to the landing page
	};
	return (
		<div className={styles.signupContainer}>
			<img
				src='/logo.png'
				alt='Ride Sharing Logo'
				className={styles.logo}
			/>
			<form className={styles.form} onSubmit={handleSubmit}>
				{" "}
				{/* Add handleSubmit to form submission */}
				<input
					type='text'
					placeholder='Name'
					className={styles.inputField}
				/>
				<input
					type='email'
					placeholder='Email'
					className={styles.inputField}
				/>
				<input
					type='tel'
					placeholder='Contact Number'
					className={styles.inputField}
				/>
				<input
					type='text'
					placeholder='Pcard Number'
					className={styles.inputField}
				/>
				<label className={styles.checkboxContainer}>
					<input type='checkbox' />I am 18 and above
				</label>
				<button type='submit' className={styles.registerButton}>
					Register
				</button>
			</form>
			<p className={styles.signInText}>
				Already a user? <a href='/signin'>Sign In</a>
			</p>
		</div>
	);
};

export default Signup;
