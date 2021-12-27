import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import React from "react";
import styles from "./Projects.module.css";
import projectImg1 from "assets/images/project-img-1.jpg";
import projectImg2 from "assets/images/project-img-2.jpg";
import projectImg3 from "assets/images/project-img-3.jpg";
import projectImg4 from "assets/images/project-img-4.jpg";
import projectImg5 from "assets/images/project-img-5.jpg";
import projectImg6 from "assets/images/project-img-6.jpg";

function Projects() {
  return (
    <div>
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
      <div className={styles.project_cards}>
        <ProjectCard text="In the Works" img={projectImg1} />
        <ProjectCard text="Sarasota House" img={projectImg2} />
        <ProjectCard text="North Sea House" img={projectImg3} />
        <ProjectCard text="Bridgehampton Beach House" img={projectImg4} />
        <ProjectCard text="Southampton House" img={projectImg5} />
        <ProjectCard text="Bridgehampton House" img={projectImg6} />
      </div>
    </div>
  );
}

export default Projects;
