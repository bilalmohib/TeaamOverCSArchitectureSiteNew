import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare, FaHouzz } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import useMediaQuery from "../../hooks/useMediaQuery";
import OutsideClickDetector from "../../hooks/OutsideClickDetector";

function Navbar({ hamburgerColor = "white" }) {
  const [show, setshow] = React.useState(false);
  const [scrolled, setscrolled] = React.useState(false);
  const [lastScrollTop, setlastScrollTop] = React.useState(0);
  const [scrollHide, setScrollHide] = React.useState(false);
  const isBellow950 = useMediaQuery("(max-width: 950px)");

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 80) {
        setscrolled(true);
        if (window.scrollY > 200) {
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

  const MenuRef = OutsideClickDetector(() => {
    setshow(false);
  });

  return (
    <div
      className={`${styles.navbar_wrapper} ${scrolled ? styles.scrolled : ""} ${scrollHide ? styles.scrollHide : ""
        }`}
    >
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <Link href="/">
            <img
              className={styles.logo}
              src={"/assets/images/Logo.png"}
              alt="" />
          </Link>

          <div
            className={`${styles.navbar_links_wrapper} ${show ? styles.show : ""
              }`}
            ref={MenuRef}
          >
            <div className={styles.container_wrapper}>
              <div className={styles.navbar_links}>
                <RiCloseFill
                  className={styles.cross_sidebar_icon}
                  size={30}
                  color="white"
                  onClick={() => setshow(false)}
                />
                <div className={styles.navbar_links_left}>
                  <Link href="/" className={({ isActive }) =>
                    `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                    }`}>
                    Home
                  </Link>
                  <Link
                    href="/AboutUs"

                  >
                    <a className={({ isActive }) =>
                      `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                      }`
                    }
                      href="#">
                      About Us
                    </a>
                  </Link>
                  <Link
                    href="/Services"

                  >
                    <a className={({ isActive }) =>
                      `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                      }`
                    }
                      href="#">
                      Services
                    </a>
                  </Link>
                  <Link
                    href="/Projects"
                    className={({ isActive }) =>
                      `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                      }`
                    }
                  >
                    Projects
                  </Link>
                  <Link
                    href="/Videos"

                  >
                    <a
                      className={({ isActive }) =>
                        `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                        }`
                      }
                      href="#">
                      Videos
                    </a>
                  </Link>
                  <Link
                    href="/Blogs"
                  >
                    <a
                      className={({ isActive }) =>
                        `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                        }`
                      }
                      href="#">
                      Blog
                    </a>
                  </Link>
                  <Link
                    href="/ContactUs"
                  >
                    <a
                      className={({ isActive }) =>
                        `${styles.navbar_left_link} fs-18px gray uppercase ${isActive ? styles.nav_link_active : ""
                        }`
                      }
                      href="#">
                      Contact Us
                    </a>
                  </Link>
                </div>
                <div className={styles.navbar_links_right}>
                  <a href="https://www.facebook.com/AkhtarRasool.Architects" className="gray" rel="noreferrer">
                    <AiFillFacebook size={isBellow950 ? 40 : 30} />
                  </a>
                  <a href="https://www.instagram.com/akhtarrasool.architects/" className="gray" rel="noreferrer">
                    <FaInstagramSquare size={isBellow950 ? 40 : 30} />
                  </a>
                  <a href="#" className="gray" target="_blank">
                    <FaHouzz size={isBellow950 ? 40 : 30} />
                  </a>
                  <a href="https://www.linkedin.com/company/akhtarrasoolarchitects/" className="gray" rel="noreferrer">
                    <AiFillLinkedin size={isBellow950 ? 40 : 30} />
                  </a>
                </div>
              </div>
            </div>
          </div>

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
