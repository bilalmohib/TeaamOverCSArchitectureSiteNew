import React from "react";
import styles from "./BlogCard.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

function BlogCard({ text, link }) {
  return (
    <Link href={link}>
      <a className={styles.blog_card} href={"#"}>
        <div className={`${styles.blog_card_icon} gray-2`}>
          <BiRightArrowAlt />
        </div>
        <p className="fs-14px gray-2 weight-3">{text}</p>
      </a>
    </Link >
  );
}

export default BlogCard;
