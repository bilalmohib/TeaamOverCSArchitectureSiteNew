import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard({ text }) {
  return (
    <div className={styles.blog_card}>
      <p className="fs-16px weight-3">{text}</p>
    </div>
  );
}

export default BlogCard;
