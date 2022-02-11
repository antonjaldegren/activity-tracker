import React from "react";
import styles from "./MainTitle.module.css";

function MainTitle(props) {
	return <h1 className={styles["main-title"]}>{props.text}</h1>;
}

export default MainTitle;
