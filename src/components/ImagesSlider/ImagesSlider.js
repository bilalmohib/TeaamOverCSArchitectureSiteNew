import React from "react";
import "./ImagesSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import LazyLoad from "react-lazyload";
SwiperCore.use([Navigation, EffectFade, Autoplay]);

const SlideComponent = ({ text, img, textTo }) => {
  return (
    <>
      <div className={`aboutus_hero_text_wrapper ${textTo}`}>{text}</div>
      <LazyLoad once={true}>
        <img src={img} className="aboutus_hero_bg" alt="" />
      </LazyLoad>
    </>
  );
};

function ImagesSlider({ sliderData }) {
  return (
    <div className="aboutus_hero  ">
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
        {sliderData.map((data, index) => (
          <SwiperSlide>
            <SlideComponent
              img={data.image}
              textTo={data.textTo}
              text={data.text.map((text, index) => (
                <p className="aboutus_hero_text bottom lh-1 fs-57px white italic">
                  {text ? text : ""}
                </p>
              ))}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImagesSlider;
