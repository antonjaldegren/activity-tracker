import React from "react";
import styles from "./Activity.module.css";

const now = new Date();
const month = now.toLocaleString("en-us", { month: "long" });
const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

function Activity(props) {
	// Parse props
	const {
		data: { id, title, daysCompleted },
		toggleDay,
		removeActivity,
	} = props;

	// Handle click events
	function handleDay(e) {
		toggleDay(id, Number(e.target.innerText));
	}

	function handleRemove() {
		removeActivity(id);
	}

	// Create day buttons
	const buttons = Array.from({ length: days }, (_el, i) => (
		<button
			className={
				daysCompleted.includes(i + 1)
					? `${styles.completed} ${styles["day-button"]}`
					: styles["day-button"]
			}
			key={`${id}_day${i + 1}`}
			onClick={handleDay}
		>
			{i + 1}
		</button>
	));

	return (
		<section className={styles.section}>
			<div className={styles["title-container"]}>
				<h2 className={styles.title}>{title}</h2>
				<button
					className={styles["remove-button"]}
					onClick={handleRemove}
				>
					×
				</button>
			</div>
			<div>
				<div>
					<p className={styles.month}>{month}</p>
					<div className={styles["button-container"]}>{buttons}</div>
				</div>
			</div>
		</section>
	);
}

export default Activity;
