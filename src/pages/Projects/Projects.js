import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import React from "react";
import styles from "./Projects.module.css";
import ProjectsComponent from "layouts/Home/Projects/Projects";

function Projects() {
  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-120px mb-100px">
        <div className="container-wrapper">
          <div className={`mb-30px ${styles.filterBy_wrapper}`}>
            <p className="uppercase fs-30px weight-6 darkest-red">Projects</p>
            <div>
              <p className="uppercase fs-20px black weight-4">filter by</p>

              <select className="fs-16px">
                <option value="" class=" ">
                  Sectors
                </option>
                <option value="Residential" class=" ">
                  Classical
                </option>
                <option value="Commercial" class=" ">
                  Modern Classical
                </option>
                <option value="Public Building" class=" ">
                  Modern
                </option>
                <option value="Farm House" class=" ">
                  Contemporary
                </option>
              </select>
              <select className="fs-16px">
                <option value="" class=" ">
                  Services
                </option>
                <option value="Residential" class=" ">
                  Architectural
                </option>
                <option value="Commercial" class=" ">
                  Interior
                </option>
                <option value="Public Building" class=" ">
                  Landscaping
                </option>
                <option value="Farm House" class=" ">
                  Construction
                </option>
              </select>
            </div>
          </div>

          <ProjectsComponent showTitles={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
