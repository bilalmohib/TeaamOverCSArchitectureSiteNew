import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Link from "next/link";
import styles from "./ServiceCard.module.css";

function ServiceCard({ img, title, linkTo, onMouseOver, text, onMouseOut, currentHoverShow,currentHoverService }) {
  return (
    <Link href={linkTo}>
      <a onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={styles.service_card} href="#">
        <img alt={"adskjhasd"} src={img} />
        <p className="fs-20px white text-center weight-4"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            marginTop: "50px",
          }}
        >{title}</p>

        {(currentHoverShow) ? (
          <>
            {(title === "Architecture" && currentHoverService==="Architecture") ? (
              <>
                <div>
                  <p className="fs-14px white text-center weight-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "white",
                      marginTop: "40px",
                    }}
                  >{text}</p>
                </div>
              </>
            ) : (title === "Interior Design" && currentHoverService==="Interior Design") ? (
              <>
                <div>
                  <p className="fs-14px white text-center weight-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "white",
                      marginTop: "40px",
                    }}
                  >{text}</p>
                </div>
              </>
            ) : (title === "Construction" && currentHoverService==="Construction") ? (
              <>
                <div>
                  <p className="fs-14px white text-center weight-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "white",
                      marginTop: "40px",
                    }}
                  >{text}</p>
                </div>
              </>
            ) : (title === "Landscaping" && currentHoverService==="Landscaping") ? (
              <>
                <div>
                  <p className="fs-14px white text-center weight-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "white",
                      marginTop: "40px",
                    }}
                  >{text}</p>
                </div>
              </>
            ) : (
              <>
              </>
            )}
          </>
        ) : (
          <>
          </>
        )}
      </a>
    </Link>
  );
}

export default ServiceCard;