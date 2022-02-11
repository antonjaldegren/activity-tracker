import React from "react";
import Activity from "./Activity";
import styles from "./ActivityList.module.css";

function ActivityList(props) {
	const { activities, toggleDay, removeActivity } = props;

	const activityList = activities.map((activity) => (
		<Activity
			key={activity.id}
			data={activity}
			toggleDay={toggleDay}
			removeActivity={removeActivity}
		/>
	));

	return (
		<main className={styles.main}>
			{activities.length > 0 ? (
				activityList
			) : (
				<p className={styles["no-added"]}>No activities added</p>
			)}
		</main>
	);
}

export default ActivityList;
