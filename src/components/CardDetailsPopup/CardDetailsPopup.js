import React, { useState } from "react";
import styles from "./CardDetailsPopup.module.css";
import { MdAdd } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function CardDetailsPopup({ img, show, setShow }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.backdrop} ${show ? styles.open : ""}`}>
      <div className={styles.component}>
        <div className={styles.header}>
          <button
            className={`${styles.detailsToggler} ${
              isOpen ? styles.active : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdAdd size={35} />
          </button>
          <button
            className="white block pointer"
            onClick={() => setShow(false)}
          >
            <IoClose size={35} />
          </button>
        </div>

        <div className={`${styles.details} ${isOpen ? styles.active : ""}`}>
          <div className="mb-30px">
            <div className={`${styles.detailsTitles} mb-15px`}>
              <p className="fs-16px gray ">Design Team:</p>
            </div>

            <div className={`${styles.detailsTitles} mb-15px`}>
              <p className="fs-16px gray ">Architectural team:</p>
              <p className="fs-16px white ">
                James Merrell, Aaron Proulx, Jun Lee, Steve Soule
              </p>
            </div>

            <div className={`${styles.detailsTitles} mb-15px`}>
              <p className="fs-16px gray ">Interiors:</p>{" "}
              <p className="fs-16px white ">Brian Brady</p>
            </div>

            <div className={`${styles.detailsTitles} mb-15px`}>
              <p className="fs-16px gray ">Landscape:</p>{" "}
              <p className="fs-16px white ">LaGuardia Design Group</p>
            </div>

            <div className={`${styles.detailsTitles} `}>
              <p className="fs-16px gray ">Builder:</p>{" "}
              <p className="fs-16px white ">Aran Construction</p>
            </div>
          </div>

          <p className="fs-16px white mb-30px">
            <span className="gray">Photography by</span> Joshua McHugh
          </p>

          <div>
            <p className="fs-16px gray mb-10px">Share:</p>{" "}
            <div className={`${styles.shoialIcons} `}>
              <a href="#">
                <FaFacebookSquare size={30} />
              </a>
              <a href="#">
                <FaTwitterSquare size={30} />
              </a>
              <a href="#">
                <FaPinterestSquare size={30} />
              </a>
            </div>
          </div>
        </div>

        <img src={img} className={styles.image} alt="" />
      </div>
    </div>
  );
}

export default CardDetailsPopup;
