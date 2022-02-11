import React, { useState } from "react";
import styles from "./InputBox.module.css";

function InputBox(props) {
	const [input, setInput] = useState("");
	const { createActivity, saveActivities, clearActivities } = props;

	// Handle events
	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleKeyPress(e) {
		if (e.key === "Enter" && input) {
			submitActivity();
		}
	}

	function submitActivity() {
		createActivity(input);
		setInput("");
	}

	return (
		<section className={styles.section}>
			<div className={styles["input-container"]}>
				<input
					className={styles.input}
					type="text"
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					value={input}
				/>
				<button
					className={styles.submit}
					onClick={submitActivity}
					disabled={!input}
				>
					Add activity
				</button>
			</div>
			<div className={styles["button-container"]}>
				<button className={styles.save} onClick={saveActivities}>
					Save
				</button>
				<button className={styles.clear} onClick={clearActivities}>
					Clear
				</button>
			</div>
		</section>
	);
}

export default InputBox;
