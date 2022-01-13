import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import LazyLoad from "react-lazyload";

function ProjectCard({ img, disc, text, linkTo = "/" }) {
  return (
    <Link to={linkTo} className={styles.project_card}>
      <div className={styles.project_card_image_wrapper}>
        <LazyLoad>
          <img src={img} alt="" />
        </LazyLoad>
        <div className={`${styles.text_wrapper} fs-20px white`}>{disc}</div>
      </div>

      {text ? (
        <p className="fs-16px weight-6 darkest-red uppercase">{text}</p>
      ) : (
        ""
      )}
    </Link>
  );
}

export default ProjectCard;
