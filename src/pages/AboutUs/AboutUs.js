import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import React from "react";
import "./AboutUs.css";

import { FiHome } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFlag } from "react-icons/ai";
import Counter from "components/Counter/Counter";

import ImagesSlider from "components/ImagesSlider/ImagesSlider";
import { sliderData } from "assets/Data/sliderData";
import Map from "components/Map/Map";

function AboutUs() {
  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-88px ">
        <div className="mb-70px">
          <ImagesSlider sliderData={sliderData} />
        </div>

        <div className="mb-70px">
          <div className="container-wrapper">
            <div className="aboutus_section">
              <div className="aboutus_section_left">
                <div className="mb-50px">
                  <p className="fs-40px mb-20px uppercase">Who we are</p>

                  <p className="fs-20px mb-15px">
                    Chapman Taylor is an award-winning practice of global
                    architects, masterplanners and interior designers, known for
                    designing places and buildings that are both creative and
                    successful.
                  </p>
                  <p className="fs-20px">
                    Established in 1959, we have longstanding relationships with
                    many of the world’s leading developers, contractors,
                    consultants, investors and brands.
                  </p>
                </div>
                <div className="aboutus_details">
                  <div>
                    <FiHome size={60} />
                    <Counter end={2000} />
                    <p className="fs-25px weight-3">Projects</p>
                  </div>
                  <div>
                    <IoLocationOutline size={60} />
                    <Counter end={17} showPlusSign={false} />
                    <p className="fs-25px weight-3">Locations</p>
                  </div>
                  <div>
                    <AiOutlineFlag size={60} />
                    <Counter end={100} />
                    <p className="fs-25px weight-3">Cities</p>
                  </div>
                </div>
              </div>
              <div className="aboutus_section_right">
                <p className="fs-40px mb-20px uppercase">Our Offices</p>
                <div className="about_map_wrapper">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
