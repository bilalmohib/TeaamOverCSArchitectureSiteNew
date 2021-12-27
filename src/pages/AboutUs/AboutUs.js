import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import React from "react";
import "./AboutUs.css";
import aboutimg1 from "assets/images/about-img-1.jpg";
import aboutimg2 from "assets/images/about-img-2.jpg";
import aboutimg3 from "assets/images/about-img-3.jpg";
import aboutimg4 from "assets/images/about-img-4.jpg";
import aboutimg5 from "assets/images/about-img-5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import { FiHome } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFlag } from "react-icons/ai";
import Counter from "components/Counter/Counter";
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  FlyToInterpolator,
} from "react-map-gl";
import Pins from "./Pins";

import CITIES from "assets/Data/cities.json";

SwiperCore.use([Navigation, EffectFade, Autoplay]);

const SlideComponent = ({ text, img }) => {
  return (
    <>
      {text}
      <img src={img} className="aboutus_hero_bg" alt="" />
    </>
  );
};

function AboutUs() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -100.4376,
    zoom: 2.5,
  });

  const geolocateStyle = {
    top: 0,
    left: 0,
    padding: "10px",
  };

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: "10px",
  };

  const navStyle = {
    top: 72,
    left: 0,
    padding: "10px",
  };

  const onSelectCity = React.useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: "auto",
    });
  }, []);

  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-88px ">
        <div className="aboutus_hero mb-70px ">
          <Swiper
            navigation={true}
            loop={true}
            grabCursor={true}
            effect={"fade"}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <SlideComponent
                img={aboutimg1}
                text={
                  <p className="aboutus_hero_text top lh-1 fs-57px white italic">
                    Creative and Successful <br /> Place and Spaces
                  </p>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideComponent
                img={aboutimg2}
                text={
                  <p className="aboutus_hero_text bottom lh-1 fs-57px white italic">
                    Over 300 Design Awards <br /> Globally
                  </p>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideComponent
                img={aboutimg3}
                text={
                  <p className="aboutus_hero_text top lh-1 fs-57px white italic">
                    17 Studios <br /> One Global Team
                  </p>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideComponent
                img={aboutimg4}
                text={
                  <p className="aboutus_hero_text bottom lh-1 fs-57px white italic">
                    Early Adopters of <br /> Design Technology
                  </p>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideComponent
                img={aboutimg5}
                text={
                  <p className="aboutus_hero_text bottom lh-1 fs-57px white italic">
                    Global Architects, <br /> Masterplanners <br /> and Interior
                    Designers
                  </p>
                }
              />
            </SwiperSlide>
          </Swiper>
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
                <ReactMapGL
                  {...viewport}
                  mapboxApiAccessToken="pk.eyJ1IjoiYWJkdWxsYWhtZWhib29iIiwiYSI6ImNreG9yZ3o4NjRhZHUyeXE5eTJkb3lwNzEifQ.stiPNaCQ2Z3av7waoQMqnw"
                  width="100%"
                  height="100%"
                  onViewportChange={(newviewport) => setViewport(newviewport)}
                  className="myMap"
                >
                  <Pins data={CITIES} onSelectCity={onSelectCity} />

                  <GeolocateControl style={geolocateStyle} />
                  <FullscreenControl style={fullscreenControlStyle} />
                  <NavigationControl style={navStyle} />
                </ReactMapGL>
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
