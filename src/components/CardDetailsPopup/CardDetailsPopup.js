import React, { useEffect, useState } from "react";
import styles from "./CardDetailsPopup.module.css";
import { MdAdd } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useMediaQuery from "../../hooks/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CardDetailsPopup({
  img,
  show,
  setShow,
  details,
  projectTitle,
  projectDescription,
  clientName,
  ProjectService,
  projectSiteLocation,
  Area,
  Description
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isHeightBellow620 = useMediaQuery("(max-height: 620px)");

  return (
    <div className={`${styles.backdrop} ${show ? styles.open : ""}`}>
      <div className={styles.component}>
        <div className={styles.header}>
          <button
            className={`${styles.detailsToggler} ${isOpen ? styles.active : ""
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
              className={`${styles.detailsTitles} ${isHeightBellow620 ? "mb-10px" : "mb-15px"
                }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Client :
              </p>
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"
                  } white `}
              >
                {clientName}
              </p>
            </div>

            <div
              className={`${styles.detailsTitles} ${isHeightBellow620 ? "mb-10px" : "mb-15px"
                }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Scope :
              </p>{" "}
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"
                  } white `}
              >
                {ProjectService}
              </p>
            </div>

            <div
              className={`${styles.detailsTitles} ${isHeightBellow620 ? "mb-10px" : "mb-15px"
                }`}
            >
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Site Location :
              </p>{" "}
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"
                  } white `}
              >
                {projectSiteLocation}
              </p>
            </div>

            <div className={`${styles.detailsTitles} `}>
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Project Size :
              </p>{" "}
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"
                  } white `}
              >
                {Area}
              </p>
            </div>

            <div className={`${styles.detailsTitles} `}>
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"} gray `}
              >
                Description :
              </p>{" "}
              <p
                className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"
                  } white `}
              >
                {projectDescription}
              </p>
            </div>

          </div>

          <div>
            <p
              className={`${isHeightBellow620 ? "fs-14px" : "fs-16px"
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

        <LazyLoadImage
          alt={projectTitle}
          style={{
            display: "block",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width:"100vw",
            height:"97.5vh"
          }}
          src={img}
        />
      </div>
    </div>
  );
}

export default CardDetailsPopup;
