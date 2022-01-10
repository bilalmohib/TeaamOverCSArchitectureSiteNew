import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import whatsappIcon from "assets/images/whatsapp-btn.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_center}>
        <p className="fs-52px white weight-5 mb-15px text-center">
          Let’s inspire you with our work
        </p>
        <p className="fs-21px white weight-3 font-open-sans text-center mb-15px">
          Click on any of the services offered by Galleria Designs to explore
          our portfolio
        </p>

        <div className={styles.hero_cards}>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Architecture
          </Link>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Interior Design
          </Link>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Construction- Grey Structure
          </Link>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Project Management
          </Link>
        </div>
      </div>

      <div className={styles.whatsappBtn}>
        <div className={`${styles.whatsappBtnStatus} fs-16px white`}>
          WhatsApp us
        </div>
        <img src={whatsappIcon} alt="" />
      </div>

      <div className={styles.scrollIndicator}></div>
    </div>
  );
}

export default Hero;
