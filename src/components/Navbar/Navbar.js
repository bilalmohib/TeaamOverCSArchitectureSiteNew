import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare, FaHouzz } from "react-icons/fa";

function Navbar() {
  const [show, setshow] = React.useState(false);
  const [scrolled, setscrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 80) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`${styles.navbar_wrapper} ${scrolled ? styles.scrolled : ""}`}
    >
      <div
        className={`${styles.navbar_links_wrapper} ${show ? styles.show : ""}`}
      >
        <div className="container-wrapper">
          <div className={styles.navbar_links}>
            <div className={styles.navbar_links_left}>
              <Link to="/" className="fs-18px gray uppercase">
                Home
              </Link>
              <Link to="/" className="fs-18px gray uppercase">
                About Us
              </Link>
              <Link to="/" className="fs-18px gray uppercase">
                SERVICES
              </Link>
              <Link to="/" className="fs-18px gray uppercase">
                projects
              </Link>
              <Link to="/" className="fs-18px gray uppercase">
                videos
              </Link>
              <Link to="/" className="fs-18px gray uppercase">
                blogs
              </Link>
              <Link to="/" className="fs-18px gray uppercase">
                Contact Us
              </Link>
            </div>
            <div className={styles.navbar_links_right}>
              <a href="#" className="gray" target="_blank">
                <AiFillFacebook size={30} />
              </a>
              <a href="#" className="gray" target="_blank">
                <FaInstagramSquare size={30} />
              </a>
              <a href="#" className="gray" target="_blank">
                <FaHouzz size={30} />
              </a>
              <a href="#" className="gray" target="_blank">
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className={styles.navbar}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="" />
          </Link>

          <FiMenu
            size={35}
            className="white pointer"
            onClick={() => setshow(!show)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
