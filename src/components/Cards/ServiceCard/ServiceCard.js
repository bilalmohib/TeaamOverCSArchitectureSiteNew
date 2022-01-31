import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

function ServiceCard({ img, title }) {
  return (
    <Link to="/" className={styles.service_card}>
      <LazyLoadImage alt={"adskjhasd"} src={img} />
      <p className="fs-20px white text-center weight-4">{title}</p>
    </Link>
  );
}

export default ServiceCard;
