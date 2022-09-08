import React from "react";
import styles from "./Footer.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaAngleUp,
} from "react-icons/fa";
import Image from "next/image";
//Importing next link
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.rtdContainer}>
        <h1 className={styles.headingrtd}>
          READY TO DISCUSS YOUR NEXT PROJECT?
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button className={styles.btnrtd}>Get In Touch</button>
        </div>
      </div>
      <div className={styles.afContainer}>
        <div className={styles.afblock1}>
          <Image
            className={styles.logo}
            src={"/assets/whiteLogo.png"}
            width={60}
            height={60}
            alt="Architect Akhtar Rasool"
          />
        </div>
        <div className={styles.afblock2}>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className={styles.afblock3}>
          <button className={styles.btnafStartProject}>
            <span>Start a Project</span>
          </button>
        </div>
      </div>
      <div className={styles.copyrightContainer}>
        <p>© 2022 Architect Akhtar Rasool</p>
        <ul>
          <li title={`Linkedin | Akhtar Rasool Architects`}>
            <FaLinkedinIn size={20} color={"0E76A8"} />
          </li>
          <li title={`Facebook | Akhtar Rasool Architects`}>
            <FaFacebookF size={20} color={"4267B2"} />
          </li>
          <li title={`Twitter | Akhtar Rasool Architects`}>
            <FaTwitter size={20} color={"1DA1F2"} />
          </li>
          <li title={`Youtube | Akhtar Rasool Architects`}>
            <FaYoutube size={20} color={"FF0000"} />
          </li>
          <li title={`Pinterest | Akhtar Rasool Architects`}>
            <FaPinterest size={20} color={"C92649"} />
          </li>
          <li title={`Instagram | Akhtar Rasool Architects`}>
            <FaInstagram size={20} color={"3F729B"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

//
