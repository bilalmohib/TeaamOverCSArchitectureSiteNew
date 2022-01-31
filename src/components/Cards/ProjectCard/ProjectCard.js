import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProjectCard.module.css";

import CardDetailsPopup from "components/CardDetailsPopup/CardDetailsPopup";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectCard(props) {
  const { img, disc, text, linkTo = "/", data } = props;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data?.details) {
      if (show) return (document.body.style.overflowY = "hidden");
      else {
        document.body.style.overflowY = "scroll";
      }
    }
  });

  const handler = () => {
    if (data?.page) {
      navigate(linkTo);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      {data?.details &&
        (show ? (
          <CardDetailsPopup
            img={img}
            details={data.details}
            show={show}
            setShow={setShow}
          />
        ) : (
          ""
        ))}

      <div onClick={handler} className={`${styles.project_card} pointer`}>
        <div className={styles.project_card_image_wrapper}>
          <LazyLoadImage alt={"adskjhasd"} src={img} />
          <div className={`${styles.text_wrapper} fs-20px white`}>{disc}</div>
        </div>

        {text ? (
          <p className="fs-16px weight-6 darkest-red uppercase">{text}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ProjectCard;
