import React from "react";
import styles from "./BlogCard.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function BlogCard({ text, link }) {
  return (
    <Link to={link} className={styles.blog_card}>
      <div className={`${styles.blog_card_icon} gray-2`}>
        <BiRightArrowAlt />
      </div>
      <p className="fs-14px gray-2 weight-3">{text}</p>
    </Link>
  );
}

export default BlogCard;
