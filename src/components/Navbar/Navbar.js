import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare, FaHouzz } from "react-icons/fa";

function Navbar({ hamburgerColor = "white" }) {
  const [show, setshow] = React.useState(false);
  const [scrolled, setscrolled] = React.useState(false);
  const [lastScrollTop, setlastScrollTop] = React.useState(0);
  const [scrollHide, setScrollHide] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 80) {
        setscrolled(true);
        if (window.scrollY > 1000) {
          var scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > lastScrollTop) {
            setScrollHide(true);
          } else {
            setScrollHide(false);
          }

          setlastScrollTop(scrollTop);
        }
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
      className={`${styles.navbar_wrapper} ${scrolled ? styles.scrolled : ""} ${
        scrollHide ? styles.scrollHide : ""
      }`}
    >
      <div
        className={`${styles.navbar_links_wrapper} ${show ? styles.show : ""}`}
      >
        <div className="container-wrapper">
          <div className={styles.navbar_links}>
            <div className={styles.navbar_links_left}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                SERVICES
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                projects
              </NavLink>
              <NavLink
                to="/videos"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                videos
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                blogs
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `${styles.navbar_left_link} fs-18px gray uppercase ${
                    isActive ? styles.nav_link_active : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
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
            className={`white pointer ${styles.navbar_hamburger}`}
            color={hamburgerColor}
            onClick={() => setshow(!show)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
