import styles from "../styles/RequestRide.module.css";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import rideData from "../data/rideData.json";

const Driver = () => {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [rideType, setRideType] = useState("public");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const router = useRouter();

	const [acceptedIndices, setAcceptedIndices] = useState([]);

    const handleAccept = (index) => {
        if (acceptedIndices.includes(index)) {
            setAcceptedIndices(acceptedIndices.filter((i) => i !== index));
        } else {
            setAcceptedIndices([...acceptedIndices, index]);
        }
    };

	return (
		<div>
			<nav className={styles.navbar}>
                <img src='/logo.png' alt='Ride Sharing Logo' style={{ width: '2.5em'}} /> {}
				<div className={styles.navItems}>
					<button
						onClick={() => router.push("/driver")}
						className={styles.navButton}
					>
						Requested Rides
					</button>
                    <button onClick={() => router.push("/priceCalculatorDriver")}
						className={styles.navButton}>
						Price Calculator
					</button>
					<button onClick={() => router.push("/signup")}
                        className={styles.signOut}>
                        Sign Out
                    </button>
				</div>
			</nav>

			<div style={{ height: "50px" }}></div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div style={{ width: "90%", overflowX: "auto" }}>
<table
    style={{
        width: "100%",
        borderCollapse: "collapse",
        tableLayout: "fixed",
        border: "1px solid #ccc",
    }}
>
    <thead>
        <tr>
            <th
                style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                }}
            >
                From
            </th>
            <th
                style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                }}
            >
                To
            </th>
            <th
                style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                }}
            >
                Date
            </th>
            <th
                style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                }}
            >
                Time
            </th>
            <th
                style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                }}
            >
                Accept
            </th>
        </tr>
    </thead>
    <tbody>
    {rideData.map((ride, index) => (
        <tr key={index}>
            <td style={{ textAlign: "center", padding: "10px" }}>{ride.from}</td>
            <td style={{ textAlign: "center", padding: "10px" }}>{ride.to}</td>
            <td style={{ textAlign: "center", padding: "10px" }}>{ride.date}</td>
            <td style={{ textAlign: "center", padding: "10px" }}>{ride.time}</td>
            <td style={{ textAlign: "center", padding: "10px" }}>
			{acceptedIndices.includes(index) ? (
                                <span>Accepted</span>
                            ) : (
                                <button onClick={() => handleAccept(index)} style={{ backgroundColor: "black", color: "#fff" }}>Accept</button>
                            )}
            </td>
        </tr>
    ))}
</tbody>
</table>
				</div>
			</div>
		</div>
	);
};

export default Driver;