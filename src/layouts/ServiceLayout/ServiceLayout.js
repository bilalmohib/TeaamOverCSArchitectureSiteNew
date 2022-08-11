import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../layouts/Footer/Footer";
import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard";

import { useRouter } from "next/router";
import styles from "./Services.module.css";

function ServiceLayout(props) {
  const { data } = props;
  const { sliderData, cardsData, pageName } = data;
  const router = useRouter();
  // const location = useLocation();
  const PATH = location.pathname;
  const SPLITED_PATH = PATH.split("/");
  const PAGENAME = SPLITED_PATH.slice(1, SPLITED_PATH.length).join("->");
  const PATHSARRAY = SPLITED_PATH.slice(1, SPLITED_PATH.length);

  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="container-wrapper mt-130">
        {pageName ? (
          <p
            className={`${styles.linkdefiner} fs-30px weight-6 darkest-red mb-30px uppercase`}
          >
            {location.pathname
              .split("/")
              .filter((a) => (a === " " ? null : a))
              .map((a, index) => {
                return (
                  <>
                    <span
                      onClick={() =>
                        router.push(`/${PATHSARRAY.slice(0, index + 1).join("/")}`)
                      }
                      className="pointer hover-underline"
                    >
                      {SPLITED_PATH.slice(1, SPLITED_PATH.length).slice(
                        index,
                        index + 1
                      )}
                    </span>
                    {index + 1 ===
                      location.pathname
                        .split("/")
                        .filter((a) => (a === " " ? null : a)).length ? (
                      ""
                    ) : (
                      <span>{`->`}</span>
                    )}
                  </>
                );
              })}
          </p>
        ) : (
          ""
        )}
        <div className={`${styles.cards} mb-70px`}>
          {cardsData.map((data, index) => (
            <div key={index} className={styles.card}>
              <ProjectCard
                linkTo={data.linkTo}
                text={data.text}
                disc={data.disc}
                img={data.img}
                data={data}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ServiceLayout;
