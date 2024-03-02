import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/Signup.module.css"; // Import the CSS module

const Signin = () => {
	const router = useRouter(); // Initialize the router
	const [isTermsChecked, setIsTermsChecked] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission behavior
		// Here you can add form validation or other operations before redirecting

		if (isTermsChecked) {
			router.push("/landing"); // Redirect to the landing page if terms are checked
		} else {
			alert(
				"Please accept the terms and conditions."
			);
		}
	};

	const handleTermsChange = () => {
		setIsTermsChecked(!isTermsChecked); // Toggle the terms checkbox
	};

	return (
		<div className={styles.signupContainer}>
			<img
				src='/logo.png'
				alt='Ride Sharing Logo'
				className={styles.logo}
			/>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label className={styles.label}>Name</label>
				<input
					type='text'
					placeholder='Enter your name'
					className={styles.inputField}
					required // Make the field required
				/>
				<label className={styles.label}>Email</label>
				<input
					type='email'
					placeholder='Enter your email'
					className={styles.inputField}
					required // Make the field required
				/>
				<label className={styles.checkboxContainer}>
					<input
						type='checkbox'
						checked={isTermsChecked}
						onChange={handleTermsChange}
						required // Make the checkbox required
					/>
					<span className={styles.checkmark}></span>I have read the
					<a href='/terms'>terms and conditions.</a>
				</label>
				<button type='submit' className={styles.registerButton}>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default Signin;
