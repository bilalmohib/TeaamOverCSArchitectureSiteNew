import React, { useState } from "react";

// Importing Components
import ServiceCard from "../../../components/Cards/ServiceCard/ServiceCard";
// Importing modular css
import styles from "./Services.module.css";

function Services() {

  const [currentBackgroundImage, setCurrentBackgroundImage] = useState("/assets/images/Home/Services/1.jpg");
  const [currentHoverShow, setCurrentHoverShow] = useState(true);
  const [currentHoverService, setCurrentHoverService] = useState('Architecture');

  return (
    <div className="mb-100px">
      <div className="mb-50px">
        <div className={`title_wrapper`}>
          <div className="mb-30px ">
            <p className="text-center text-white fs-30px weight-2 margin-center title">
              OUR SERVICES
            </p>
          </div>

          <p className="fs-16px text-white text-center weight-3 lh-35px">
            We believe in delivering the best of our Architecture, Interior, Furniture & Supervision services.
          </p>
        </div>
      </div>

      <div className={styles.services_cards}
        style={{
          backgroundImage: `url(${currentBackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <ServiceCard
          linkTo="/services/architecture"
          title="Architecture"
          currentHoverService={currentHoverService}
          img={"/assets/Website Data/Web-Home-Page-Services-icon-boxes/Architecture.jpg"}
          text="Architecture Service we provide architectural services to our clients. We have a team of qualified and experienced architects who are capable of delivering the best of architectural services."
          currentBackgroundImage={currentBackgroundImage}
          onMouseOut={() => setCurrentHoverShow(false)}
          currentHoverShow={currentHoverShow}
          onMouseOver={() => {
            setCurrentHoverService("Architecture");
            setCurrentHoverShow(true);
            setCurrentBackgroundImage("/assets/images/Home/Services/1.jpg");
          }}
        />
        <ServiceCard
          linkTo="/services/Interior"
          title="Interior Design"
          currentHoverService={currentHoverService}
          img={"/assets/Website Data/Web-Home-Page-Services-icon-boxes/Construction.jpeg"}
          text="Interior Design Service we provide interior design services to our clients. We have a team of qualified and experienced interior designers who are capable of delivering the best of interior design services."
          currentBackgroundImage={currentBackgroundImage}
          onMouseOut={() => setCurrentHoverShow(false)}
          currentHoverShow={currentHoverShow}
          onMouseOver={() => {
            setCurrentHoverService("Interior Design");
            setCurrentHoverShow(true);
            setCurrentBackgroundImage("/assets/images/Home/Services/2.jpg");
          }}
        />
        <ServiceCard
          linkTo="services/Construction"
          title="Construction"
          currentHoverService={currentHoverService}
          img={"/assets/Website Data/Web-Home-Page-Services-icon-boxes/Interior.jpeg"}
          text="Construction Service we provide construction services to our clients. We have a team of qualified and experienced construction engineers who are capable of delivering the best of construction services."
          currentBackgroundImage={currentBackgroundImage}
          onMouseOut={() => setCurrentHoverShow(false)}
          currentHoverShow={currentHoverShow}
          onMouseOver={() => {
            setCurrentHoverService("Construction");
            setCurrentHoverShow(true);
            setCurrentBackgroundImage("/assets/images/Home/Services/3.jpg");
          }}
        />
        <ServiceCard
          linkTo="services/Landscaping"
          title="Landscaping"
          currentHoverService={currentHoverService}
          img={"/assets/Website Data/Web-Home-Page-Services-icon-boxes/Landscaping.jpg"}
          text="Landscaping Service we provide landscaping services to our clients. We have a team of qualified and experienced landscapers who are capable of delivering the best of landscaping services."
          currentBackgroundImage={currentBackgroundImage}
          onMouseOut={() => setCurrentHoverShow(false)}
          currentHoverShow={currentHoverShow}
          onMouseOver={() => {
            setCurrentHoverService("Landscaping");
            setCurrentHoverShow(true);
            setCurrentBackgroundImage("/assets/images/Home/Services/4.jpg");
          }}
        />
      </div>
    </div>
  );
}

export default Services;
