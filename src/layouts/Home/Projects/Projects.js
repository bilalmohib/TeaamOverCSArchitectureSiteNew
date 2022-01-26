import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import React from "react";
import styles from "./Projects.module.css";

import projectImg1 from "assets/Website Data/Web-Home-Page-Projects/1.jpg";
import projectImg2 from "assets/Website Data/Web-Home-Page-Projects/2.jpg";
import projectImg3 from "assets/Website Data/Web-Home-Page-Projects/3.jpg";
import projectImg4 from "assets/Website Data/Web-Home-Page-Projects/4.jpg";
import projectImg5 from "assets/Website Data/Web-Home-Page-Projects/5.jpg";
import projectImg6 from "assets/Website Data/Web-Home-Page-Projects/6.jpg";
import projectImg7 from "assets/Website Data/Web-Home-Page-Projects/7.jpg";
import projectImg8 from "assets/Website Data/Web-Home-Page-Projects/8.jpg";

function Projects({ showTitles = true }) {
  return (
    <div>
      {showTitles ? (
        <div className="mb-50px">
          <div className={`title_wrapper`}>
            <div className="mb-30px ">
              <p className="text-center fs-30px weight-2 black margin-center  title">
                OUR Projects
              </p>
            </div>

            <p className="fs-16px text-center weight-3 lh-35px">
              At Galleria Designs our teams of Architects, Interior Designers,
              Furniture Designers, Landscaping Experts, Engineers and Project
              Managers collaborate and deliver you your dream projects.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.project_cards}>
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="In the Works"
          img={projectImg1}
        />
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="Sarasota House"
          img={projectImg2}
        />
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="North Sea House"
          img={projectImg3}
        />
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="Bridgehampton Beach House"
          img={projectImg4}
        />
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="Southampton House"
          img={projectImg5}
        />
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="Bridgehampton House"
          img={projectImg6}
        />
        {/* <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="In the Works"
          img={projectImg7}
        />
        <ProjectCard
          data={{
            details: {
              designTeam: "",
              architecturalTeam: "",
              interiors: "",
              landscape: "",
              builder: "",
              photographyBy: "",
            },
          }}
          disc="Sarasota House"
          img={projectImg8}
        /> */}
      </div>
    </div>
  );
}

export default Projects;
