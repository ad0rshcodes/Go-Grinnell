import React from "react";
import styles from "../styles/Terms.module.css"; // Import the CSS module for styling

const Terms = () => {
	return (
		<div className={styles.termsContainer}>
			<h1 className={styles.title}>Terms and Conditions</h1>
			<div className={styles.section}>
				<h2>Insurance</h2>
				<p>
					Our ride-sharing platform provides a platform for college
					students to connect with each other for rides. It's
					important to note that we do not provide any insurance
					coverage for drivers or passengers. It is the responsibility
					of each user to ensure they have appropriate insurance
					coverage.
				</p>
			</div>
			<div className={styles.section}>
				<h2>Payment</h2>
				<p>
					Payments for rides can be made directly between users using
					payment platforms such as Zelle or Venmo. We do not process
					payments directly through our platform. Users are
					responsible for ensuring that payments are made securely.
				</p>
			</div>
			<div className={styles.section}>
				<h2>Liabilities</h2>
				<p>
					Our platform acts as a facilitator for ride-sharing and does
					not hold any liability for the actions of drivers or
					passengers. Users are solely responsible for their own
					safety and well-being when using our platform. We recommend
					that users take necessary precautions and verify the
					identity of the other party before sharing rides.
				</p>
			</div>
		</div>
	);
};

export default Terms;
