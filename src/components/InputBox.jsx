import React from "react";
import styles from "./InputBox.module.css";

function InputBox(props) {
	// Parse props
	const { input, setInput, createActivity, saveActivities, clearActivities } =
		props;

	// Handle events
	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleKeyPress(e) {
		e.key === "Enter" && input && createActivity();
	}

	return (
		<section className={styles.section}>
			<div>
				<input
					className={styles.input}
					type="text"
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					value={input}
				/>
				<button
					className={styles.submit}
					onClick={createActivity}
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
