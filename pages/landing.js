import styles from "../styles/Landing.module.css";
import { useRouter } from "next/router";

export default function Landing() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<img
				src='/logo.png'
				alt='Ride Sharing Logo'
				className={styles.logo}
			/>
			<div className={styles.options}>
				<div
					className={styles.box}
					onClick={() => router.push("/requestride")}
				>
					Passenger
				</div>
				<div
					className={styles.box}
					onClick={() => router.push("/driver")}
				>
					Driver
				</div>
			</div>
		</div>
	);
}
