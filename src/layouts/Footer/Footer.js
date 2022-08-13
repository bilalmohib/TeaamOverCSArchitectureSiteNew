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
//Importing next link
import Link from "next/link";

function Footer() {
  return (
    <div className={`${styles.footer} `}>
      <div className={styles.footerTop_wrapper}>
        <div className={`container-wrapper`}>
          <div className={styles.footerTop}>
            <div>
              <p className="font-open-sans darkest-red weight-9 fs-14px mb-15px">
                Marketing
              </p>
              <Link href="/get-quote">
                <a
                  className="font-open-sans white weight-5 fs-14px uppercase pointer"
                  href="#"
                >
                  Get Quote
                </a>
              </Link>
            </div>
            <div>
              <p className="font-open-sans darkest-red weight-9 fs-14px mb-20px">
                Follow Us
              </p>

              <div className={styles.footer_social_icons}>
                <a target="_blank" href="https://www.linkedin.com/company/akhtarrasoolarchitects/">
                  <FaLinkedinIn size={25} />
                </a>
                <a target="_blank" href="https://www.facebook.com/AkhtarRasool.Architects">
                  <FaFacebookF size={25} />
                </a>
                <Link href="/">
                  <FaTwitter size={25} />
                </Link>
                <Link href="/">
                  <FaYoutube size={25} />
                </Link>
                <Link href="/">
                  <FaPinterest size={25} />
                </Link>
                <a target="_blank" href="https://www.instagram.com/akhtarrasool.architects/">
                  <FaInstagram size={25} />
                </a>
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
            {/* left */}
            <div className={styles.footer_bottom_link}>
              <div>
                {/* <p className="font-open-sans white weight-6 fs-12px">
                  © Chapman Taylor 2021
                </p> */}
                <p className="font-open-sans white weight-6 fs-12px">
                  All rights reserved
                </p>
              </div>
              <div>
                <Link
                  href="/"
                >
                  <a
                    className="font-open-sans white weight-6 fs-12px"
                    href="#"
                  >
                    Cookies Policy
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="font-open-sans white weight-6 fs-12px"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </Link>
              </div>
            </div>

            {/* right */}
            <div>
              <div>
                <p
                  className={`font-open-sans white weight-8 fs-12px ${styles.footer_last_link}`}
                >
                  Design:{" "}
                  <Link
                    href="/"

                  >
                    <a
                      className="font-open-sans weight-6 white fs-12px"
                      href="#"
                    >
                      &nbsp;Chapman Taylor Graphics
                    </a>
                  </Link>
                </p>
              </div>
              <div>
                <p
                  className={`font-open-sans white weight-8 fs-12px ${styles.footer_last_link}`}
                >
                  Development:{" "}
                  <Link
                    href="/"
                  >
                    <a
                      className="font-open-sans weight-6 white fs-12px"
                      href="#"
                    >
                      &nbsp;One Darnley Roads
                    </a>
                  </Link>
                </p>
                <p className="text-white">2nd Floor, 285 MB Phase 6 DHA Lahore</p>
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
