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

import { HiOutlineHome } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";

function AboutUs() {
  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-88px ">
        {/* <div className="mb-70px">
          <ImagesSlider sliderData={sliderData} />
        </div> */}

        <div className="mt-130 mb-70px">
          <div className="container-wrapper">
            <div className="aboutus_section">
              <div className="aboutus_section_left">
                <div className="mb-50px">
                  <p className="fs-40px mb-20px uppercase">Who we are</p>

                  <p className="fs-20px mb-15px">
                    a.The firm works at multiple scales and with various organizations right from private clients to corporates & Local Government. This allows them to experiment and diversify work: master planning, architectural & interior projects, such as luxury villas, high-end residences, and unique offices as well as institutional projects. Akhtar Rasool Architects’ design approach is to re-connect architecture with nature, make optimum use of space, natural materials, lighting & landscape to reinvent and transform living environments and urban spaces. The firm strives to create design that inspires, approaching each project, regardless of size & scale, with an understanding that architecture has a unique power to influence lifestyle and society. Our forte is attention to detail and customization. Honesty to design, client satisfaction, and sustainability are the driving forces, along with the ability to constantly explore & evolve. They are dedicated to unique design approaches adapted to each project, and achieving a balance between functionality & aesthetics, context, climate, material, cost & time frame.
                  </p>
                  {/* <p className="fs-20px">
                    Established in 1959, we have longstanding relationships with
                    many of the world’s leading developers, contractors,
                    consultants, investors and brands.
                  </p> */}
                </div>
                <div className="aboutus_details">
                  <div>
                    <HiOutlineHome size={60} />
                    <Counter end={2000} />
                    <p className="fs-25px weight-3">Projects</p>
                  </div>
                  <div>
                    <IoLocationOutline size={60} />
                    <Counter end={17} showPlusSign={false} />
                    <p className="fs-25px weight-3">Locations</p>
                  </div>
                  <div>
                    <BiBuildingHouse size={60} />
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
