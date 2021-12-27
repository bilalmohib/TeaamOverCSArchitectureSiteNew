import React from "react";
import styles from "./Footer.module.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaAngleUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop_wrapper}>
        <div className={`container-wrapper`}>
          <div className={styles.footerTop}>
            <div>
              <p className="font-open-sans darkest-red weight-9 fs-14px mb-20px">
                Marketing
              </p>
              <button className="font-open-sans white weight-5 fs-14px uppercase pointer">
                Sign up to stay in touch
              </button>
            </div>
            <div>
              <p className="font-open-sans darkest-red weight-9 fs-14px mb-20px">
                Follow Us
              </p>

              <div className={styles.footer_social_icons}>
                <Link to="/">
                  <FaLinkedinIn size={25} />
                </Link>
                <Link to="/">
                  <FaFacebookF size={25} />
                </Link>
                <Link to="/">
                  <FaTwitter size={25} />
                </Link>
                <Link to="/">
                  <FaYoutube size={25} />
                </Link>
                <Link to="/">
                  <FaPinterest size={25} />
                </Link>
                <Link to="/">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>

            <div>
              <div className={styles.backToTop_btn}>
                <p className="font-open-sans darkest-red weight-6 fs-14px ">
                  Back to Top
                </p>
                <FaAngleUp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom_wrapper}>
        <div className="container-wrapper">
          <div className={styles.footerBottom}>
            <div>
              <div>
                <p className="font-open-sans white weight-6 fs-12px">
                  © Chapman Taylor 2021
                </p>
                <p className="font-open-sans white weight-6 fs-12px">
                  All rights reserved
                </p>
              </div>
              <div>
                <p
                  className={`font-open-sans white weight-8 fs-12px ${styles.footer_last_link}`}
                >
                  Design:{" "}
                  <Link
                    to="/"
                    className="font-open-sans weight-6 white fs-12px"
                  >
                    &nbsp;Chapman Taylor Graphics
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <div>
                <Link to="/" className="font-open-sans white weight-6 fs-12px">
                  Preferences Centre
                </Link>
                <Link to="/" className="font-open-sans white weight-6 fs-12px">
                  Cookies Policy
                </Link>
                <Link to="/" className="font-open-sans white weight-6 fs-12px">
                  Privacy Policy
                </Link>
                <Link to="/" className="font-open-sans white weight-6 fs-12px">
                  Modern Slavery Statement
                </Link>
                <Link to="/" className="font-open-sans white weight-6 fs-12px">
                  COVID-19 - Return to work (UK) - April 2021
                </Link>
              </div>
              <div>
                <p
                  className={`font-open-sans white weight-8 fs-12px ${styles.footer_last_link}`}
                >
                  Development:{" "}
                  <Link
                    to="/"
                    className="font-open-sans weight-6 white fs-12px"
                  >
                    &nbsp;One Darnley Roads
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

//
