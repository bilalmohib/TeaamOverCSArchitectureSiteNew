import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

function ServiceCard({ img, title }) {
  return (
    <Link to="/" className={styles.service_card}>
      <img src={img} alt="" />
      <p className="fs-20px white text-center weight-4">{title}</p>
    </Link>
  );
}

export default ServiceCard;
