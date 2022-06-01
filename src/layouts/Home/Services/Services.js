import ServiceCard from "components/Cards/ServiceCard/ServiceCard";
import React from "react";
import styles from "./Services.module.css";

import serviceImg1 from "assets/Website Data/Web-Home-Page-Services-icon-boxes/Architecture.jpg";
import serviceImg2 from "assets/Website Data/Web-Home-Page-Services-icon-boxes/Construction.jpeg";
import serviceImg3 from "assets/Website Data/Web-Home-Page-Services-icon-boxes/Interior.jpeg";
import serviceImg4 from "assets/Website Data/Web-Home-Page-Services-icon-boxes/Landscaping.jpg";

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
            We believe in delivering the best of our Architecture, Interior, Furniture & Supervision services.
          </p>
        </div>
      </div>

      <div className={styles.services_cards}>
        <ServiceCard title="Architecture" img={serviceImg1} />
        <ServiceCard title="Interior Design" img={serviceImg2} />
        <ServiceCard title="Construction" img={serviceImg3} />
        <ServiceCard title="Landscaping" img={serviceImg4} />
      </div>
    </div>
  );
}

export default Services;
