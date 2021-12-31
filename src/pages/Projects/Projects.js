import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import React from "react";
import styles from "./Projects.module.css";
import ProjectsComponent from "layouts/Home/Projects/Projects";
import SimpleDropdown from "components/Dropdown/SimpleDropdown/SimpleDropdown";

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

              <SimpleDropdown
                title="Sectors"
                options={[
                  { title: "Classical" },
                  { title: "Modern Classical" },
                  { title: "Modern" },
                  { title: "Contemporary" },
                ]}
              />
              <SimpleDropdown
                title="Services"
                options={[
                  { title: "Architectural" },
                  { title: "Interior" },
                  { title: "Landscaping" },
                  { title: "Construction" },
                ]}
              />
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
