import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import mapHtml from "./mapHtml"; // Import the mapHtml constant
import styles from "/styles/passengerPage.module.css";

export default function Passenger() {
	const [activeTab, setActiveTab] = useState("map"); // State to manage active tab
	const router = useRouter();

	useEffect(() => {
		router.beforePopState(() => {
			window.location.reload();
			return true;
		});
	}, [router]);

	const handleMapTabClick = () => {
		if (activeTab !== "map") {
			window.location.reload();
		}
		setActiveTab("map");
	};

	const handleCalculatorTabClick = () => {
		if (activeTab !== "Price Calculator") {
			setActiveTab("Price Calculator");
		}
	};

	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [result, setResult] = useState(0);

	const renderTabContent = () => {
		if (activeTab === "map") {
			return (
				<div
					style={{ marginTop: "20px", marginBottom: "20px" }}
					dangerouslySetInnerHTML={{ __html: mapHtml }}
				/>
			);
		} else if (activeTab === "Price Calculator") {
			const handleAddition = () => {
				const result = (
					Number(num1) * 0.66 +
					Number(num2) * 0.45
				).toFixed(2);
				setResult(result);
			};

			return (
				<div className={styles.outermostDiv}>
					<h2>Suggested Price Calculator</h2>
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
		}
	};

	return (
		<div className={styles.outermostDiv} style={{ padding: "20px" }}>
			<Head>
				<title>Go Grinnell</title>
			</Head>
			<h1 style={{ marginBottom: "20px", color: "navy" }}>
				Welcome to Go Grinnell
			</h1>
			<p style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
				Explore the beauty of Grinnell with our interactive map.
			</p>

			{/* Tab buttons */}
			<div style={{ marginBottom: "20px" }}>
				<button
					onClick={handleMapTabClick}
					style={{
						marginRight: "10px",
						backgroundColor:
							activeTab === "map" ? "lightblue" : "white",
						border: "1px solid navy",
						padding: "5px 10px",
						cursor: "pointer",
					}}
				>
					Map
				</button>
				<button
					onClick={handleCalculatorTabClick}
					style={{
						backgroundColor:
							activeTab === "Price Calculator"
								? "lightblue"
								: "white",
						border: "1px solid navy",
						padding: "5px 10px",
						cursor: "pointer",
					}}
				>
					Price Estimator
				</button>
			</div>

			{/* Render active tab content */}
			{renderTabContent()}
		</div>
	);
}

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
	},
	// Add more mock data as needed
];
