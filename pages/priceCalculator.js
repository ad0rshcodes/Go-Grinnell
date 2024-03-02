import styles from "/styles/priceCalculatorPage.module.css";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const priceCalculator = () => {
	const router = useRouter();

	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [result, setResult] = useState(0);

	const renderTabContent = () => {
			const handleAddition = () => {
				const result = (
					Number(num1) * 0.66 +
					Number(num2) * 0.45
				).toFixed(2);
				setResult(result);
			};

			return (
				<div className={styles.outermostDiv}>
					<h1 style={{ marginBottom: "20px", color: "navy" }}>
					Estimated Price Calculator
					</h1>
					<p>
						Enter total time in minutes and total miles (one way):
					</p>
					<div style={{ display: "flex", marginBottom: "10px" }}>
						<label style={{ marginRight: "10px" }}>
							Total Time (minutes):
						</label>
						<input
							type='number'
							value={num1}
							onChange={(e) => setNum1(e.target.value)}
							style={{ padding: "5px" }}
						/>
					</div>
					<div style={{ display: "flex", marginBottom: "10px" }}>
						<label style={{ marginRight: "10px" }}>
							Total Miles (one way):
						</label>
						<input
							type='number'
							value={num2}
							onChange={(e) => setNum2(e.target.value)}
							style={{ marginRight: "10px", padding: "5px" }}
						/>
					</div>
					<button
						onClick={handleAddition}
						style={{
							padding: "5px 10px",
							backgroundColor: "blue",
							color: "white",
							border: "none",
							cursor: "pointer",
							marginBottom: "10px",
						}}
					>
						Get Suggested Price
					</button>
					<div style={{ marginBottom: "10px" }}>
						Result: ${result}
					</div>
					<h2>GoGrinnell Registered Drivers</h2>
					<table
						style={{ borderCollapse: "collapse", width: "100%" }}
					>
						<thead>
							<tr>
								<th
									style={{
										border: "1px solid black",
										padding: "5px",
									}}
								>
									Name
								</th>
								<th
									style={{
										border: "1px solid black",
										padding: "5px",
									}}
								>
									Phone Number
								</th>
								<th
									style={{
										border: "1px solid black",
										padding: "5px",
									}}
								>
									Email
								</th>
								<th
									style={{
										border: "1px solid black",
										padding: "5px",
									}}
								>
									Car Type
								</th>
							</tr>
						</thead>
						<tbody>
							{mockData.map((person, index) => (
								<tr key={index}>
									<td
										style={{
											border: "1px solid black",
											padding: "5px",
										}}
									>
										{person.name}
									</td>
									<td
										style={{
											border: "1px solid black",
											padding: "5px",
										}}
									>
										{person.phone}
									</td>
									<td
										style={{
											border: "1px solid black",
											padding: "5px",
										}}
									>
										{person.email}
									</td>
									<td
										style={{
											border: "1px solid black",
											padding: "5px",
										}}
									>
										{person.carType}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
	};

	return (
		<div>
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
					<button className={styles.signOut}>Sign Out</button>
				</div>
			</nav>
			{renderTabContent()}
		</div>
	);
};

export default priceCalculator;

const mockData = [
	{
		name: "John Doe",
		phone: "123-456-7890",
		email: "john@example.com",
		carType: "Sedan",
	},
	{
		name: "Jane Smith",
		phone: "234-567-8901",
		email: "jane@example.com",
		carType: "SUV",
	},
	{
		name: "Michael Johnson",
		phone: "345-678-9012",
		email: "michael@example.com",
		carType: "Truck",
	}
];
