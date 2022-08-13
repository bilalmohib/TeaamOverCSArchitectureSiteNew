import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./ProjectCard.module.css";

import CardDetailsPopup from "../../CardDetailsPopup/CardDetailsPopup";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectCard(props) {
  const { img, text, linkTo = "/", data } = props;
  const router = useRouter();
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
      router.push(linkTo);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      {data?.details &&
        (show ? (
          <CardDetailsPopup
            ///////////////////////////////////////////////
            projectTitle={props.projectTitle}
            projectDescription={props.projectDescription}
            clientName={props.clientName}
            ProjectService={props.ProjectService}
            projectSiteLocation={props.projectSiteLocation}
            Area={props.Area}
            Description={props.Description}
            ///////////////////////////////////////////////
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
          <LazyLoadImage alt={props.projectTitle} src={img} />
          <div className={`${styles.text_wrapper} fs-20px white`}>{props.projectTitle}</div>
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
