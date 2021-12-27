import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

function ProjectCard({ img, text }) {
  return (
    <Link to="/" className={styles.project_card}>
      <img src={img} alt="" />

      <div className={`${styles.text_wrapper} fs-20px white`}>{text}</div>
    </Link>
  );
}

export default ProjectCard;
