import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
SwiperCore.use([Navigation, EffectFade, Autoplay]);

const SlideComponent = ({ text, img, textTo }) => {
  return (
    <>
      <div className={`aboutus_hero_text_wrapper ${textTo}`}>{text}</div>
      <LazyLoadImage alt={"adskjhasd"} className="aboutus_hero_bg" src={img} />
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
          <SwiperSlide key={index}>
            <SlideComponent
              img={data.image}
              textTo={data.textTo}
              text={data.text.map((text, index) => (
                <p key={index} className="aboutus_hero_text bottom lh-1 fs-57px white italic">
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
