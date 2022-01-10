import ServiceCard from "components/Cards/ServiceCard/ServiceCard";
import React from "react";
import styles from "./Services.module.css";
import architectureImg from "assets/images/architecture-img.jpg";
import interiordesignimg from "assets/images/interior-design-img.jpg";
import furnitureimg from "assets/images/furniture-img.jpg";
import constructionimg from "assets/images/construction-img.jpg";
import landscapingimg from "assets/images/landscaping-img.jpg";

function Services() {
  return (
    <div className="mb-100px">
      <div className="mb-50px">
        <div className={`title_wrapper`}>
          <div className="mb-30px ">
            <p className="text-center fs-30px weight-2 black margin-center  title">
              OUR SERVICES
            </p>
          </div>

          <p className="fs-16px text-center weight-3 lh-35px">
            At Galleria Designs our teams of Architects, Interior Designers,
            Furniture Designers, Landscaping Experts, Engineers and Project
            Managers collaborate and deliver you your dream projects.
          </p>
        </div>
      </div>

      <div className={styles.services_cards}>
        <ServiceCard title="Architecture" img={architectureImg} />
        <ServiceCard title="Interior Design" img={interiordesignimg} />
        {/* <ServiceCard title="Furniture" img={furnitureimg} /> */}
        <ServiceCard
          title="Construction-Grey Structure"
          img={constructionimg}
        />
        <ServiceCard title="Landscaping" img={landscapingimg} />
      </div>
    </div>
  );
}

export default Services;
