import React, { useEffect, useState } from "react";
import styles from "./CardDetailsPopup.module.css";
import { MdAdd } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useMediaQuery from "hooks/useMediaQuery";
import LazyLoad from "react-lazyload";

function CardDetailsPopup({ img, show, setShow }) {
  const [isOpen, setIsOpen] = useState(false);
  const isHeightBellow620 = useMediaQuery("(max-height: 620px)");

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
          <div className={isHeightBellow620 ? "mb-15px" : `mb-30px`}>
            <div
              className={`${styles.detailsTitles} ${
                isHeightBellow620 ? "mb-10px" : "mb-15px"
              }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Design Team:
              </p>
            </div>

            <div
              className={`${styles.detailsTitles} ${
                isHeightBellow620 ? "mb-10px" : "mb-15px"
              }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Architectural team:
              </p>
              <p
                className={`${
                  isHeightBellow620 ? "fs-14px" : "fs-16px"
                } white `}
              >
                James Merrell, Aaron Proulx, Jun Lee, Steve Soule
              </p>
            </div>

            <div
              className={`${styles.detailsTitles} ${
                isHeightBellow620 ? "mb-10px" : "mb-15px"
              }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Interiors:
              </p>{" "}
              <p
                className={`${
                  isHeightBellow620 ? "fs-14px" : "fs-16px"
                } white `}
              >
                Brian Brady
              </p>
            </div>

            <div
              className={`${styles.detailsTitles} ${
                isHeightBellow620 ? "mb-10px" : "mb-15px"
              }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Landscape:
              </p>{" "}
              <p
                className={`${
                  isHeightBellow620 ? "fs-14px" : "fs-16px"
                } white `}
              >
                LaGuardia Design Group
              </p>
            </div>

            <div className={`${styles.detailsTitles} `}>
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Builder:
              </p>{" "}
              <p
                className={`${
                  isHeightBellow620 ? "fs-14px" : "fs-16px"
                } white `}
              >
                Aran Construction
              </p>
            </div>
          </div>

          <p
            className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} white ${
              isHeightBellow620 ? "mb-10px" : "mb-30px"
            }`}
          >
            <span className="gray">Photography by</span> Joshua McHugh
          </p>

          <div>
            <p
              className={`${
                isHeightBellow620 ? "fs-14px" : "fs-16px"
              } gray mb-10px`}
            >
              Share:
            </p>{" "}
            <div className={`${styles.shoialIcons} `}>
              <a className="flex" href="#">
                <FaFacebookSquare size={isHeightBellow620 ? 27 : 30} />
              </a>
              <a className="flex" href="#">
                <FaTwitterSquare size={isHeightBellow620 ? 27 : 30} />
              </a>
              <a className="flex" href="#">
                <FaPinterestSquare size={isHeightBellow620 ? 27 : 30} />
              </a>
            </div>
          </div>
        </div>

        <LazyLoad once={true}>
          <img src={img} className={styles.image} alt="" />
        </LazyLoad>
      </div>
    </div>
  );
}

export default CardDetailsPopup;
