import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/Signup.module.css"; // Import the CSS module

const Signup = () => {
	const router = useRouter(); // Initialize the router
	const [isAgeChecked, setIsAgeChecked] = useState(false);
	const [isTermsChecked, setIsTermsChecked] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission behavior
		// Here you can add form validation or other operations before redirecting

		if (isAgeChecked && isTermsChecked) {
			router.push("/landing"); // Redirect to the landing page if terms are checked
		} else {
			alert(
				"Please accept the terms and conditions and confirm your age."
			);
		}
	};

	const handleAgeChange = () => {
		setIsAgeChecked(!isAgeChecked); // Toggle the age checkbox
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
				<label className={styles.label}>Contact Number</label>
				<input
					type='tel'
					placeholder='Enter your contact number'
					className={styles.inputField}
					required // Make the field required
				/>
				<label className={styles.label}>Pcard Number</label>
				<input
					type='text'
					placeholder='Enter your Pcard number'
					className={styles.inputField}
					required // Make the field required
				/>
				<label className={styles.checkboxContainer}>
					<input
						type='checkbox'
						checked={isAgeChecked}
						onChange={handleAgeChange}
						required // Make the checkbox required
					/>
					<span className={styles.checkmark}></span>I confirm that I
					am 18 years old or above.
				</label>
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
