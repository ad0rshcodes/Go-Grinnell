import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/RequestRide.module.css";

const RequestRide = () => {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [rideType, setRideType] = useState("public");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const rideData = { from, to, rideType, date, time };

		// Send the ride data to the API route
		await fetch("/api/saveRideData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(rideData),
		});

		// Navigate to /confirmride with query parameters
		router.push({
			pathname: "/mapHtml",
			query: { ...rideData },
		});
	};

	return (
		<>
			<nav className={styles.navbar}>
       		 <img src='/logo.png' alt='Ride Sharing Logo' style={{ width: '2.5em' }} />
				<div className={styles.navItems}>
					<button
						onClick={() => router.push("/availableride")}
						className={styles.navButton}
					>
						Existing Rides
					</button>
					<button
						onClick={() => router.push("/requestride")}
						className={styles.navButton}
					>
						Request Ride
					</button>
					<button
						onClick={() => router.push("/priceCalculator")}
						className={styles.navButton}
					>
						Price Calculator
					</button>
					<button onClick={() => router.push("/signup")}
                        className={styles.signOut}>
                        Sign Out
                    </button>
				</div>
			</nav>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<input
						type='text'
						value={from}
						onChange={(e) => setFrom(e.target.value)}
						placeholder='From'
						className={styles.input}
					/>
					<input
						type='text'
						value={to}
						onChange={(e) => setTo(e.target.value)}
						placeholder='To'
						className={styles.input}
					/>
					<select
						value={rideType}
						onChange={(e) => setRideType(e.target.value)}
						className={styles.select}
					>
						<option value='public'>Public</option>
						<option value='private'>Private</option>
					</select>
					<input
						type='date'
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className={styles.input}
					/>
					<input
						type='time'
						value={time}
						onChange={(e) => setTime(e.target.value)}
						className={styles.input}
					/>
					<button type='submit' className={styles.submitButton}>
						Request Ride
					</button>
				</form>
			</div>
		</>
	);
};

export default RequestRide;
