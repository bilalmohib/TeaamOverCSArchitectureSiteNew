import ImagesSlider from "components/ImagesSlider/ImagesSlider";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import styles from "./Services.module.css";
import Footer from "layouts/Footer/Footer";
import ProjectCard from "components/Cards/ProjectCard/ProjectCard";

function ServiceLayout({ data }) {
  const { sliderData, cardsData, pageName } = data;

  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-88px mb-70px">
        <ImagesSlider sliderData={sliderData} />
      </div>

      <div className="container-wrapper">
        {pageName ? (
          <p className="fs-30px weight-6 darkest-red mb-30px uppercase">
            {pageName}
          </p>
        ) : (
          ""
        )}
        <div className={`${styles.cards} mb-70px`}>
          {cardsData.map((data, index) => (
            <div className={styles.card}>
              <ProjectCard
                linkTo={data.linkTo}
                text={data.text}
                disc={data.disc}
                img={data.img}
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
