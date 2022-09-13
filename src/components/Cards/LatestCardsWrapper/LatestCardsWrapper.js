import React from "react";
import styles from "./LatestCardsWrapper.module.css";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import BlogCard from "../BlogCard/BlogCard";
SwiperCore.use([Navigation, EffectFade, Autoplay]);

function LatestCardsWrapper({
  title,
  slidesPerView = "auto",
  autoplayDelay = 1000,
  sliderHeight = "300px",
  data,
}) {
  // let navigationPrevRef = React.useRef(null);
  // let navigationNextRef = React.useRef(null);
  return (
    <div className={styles.home_division_cards}>
      {/* <div className={`${styles.home_division_cards_header} `}>
        <p className="fs-18px weight-6 gray-2 text-center">{title}</p>
        <div className={styles.news_navigation_btn}>
          <button 
          // ref={navigationPrevRef}
          >
            <BsFillArrowUpSquareFill className="pointer gray-2" size={20} />
          </button>
          <button 
          // ref={navigationNextRef}
          >
            <BsFillArrowDownSquareFill className="pointer gray-2" size={20} />
          </button>
        </div>
      </div>

      <Swiper
        direction={"vertical"}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        style={{ height: sliderHeight }}
        className="blogs_and_news_slider"
        // onSwiper={(swiper) => {
        //   setTimeout(() => {
        //     swiper.params.navigation.prevEl = navigationPrevRef.current;
        //     swiper.params.navigation.nextEl = navigationNextRef.current;
        //     swiper.navigation.destroy();
        //     swiper.navigation.init();
        //     swiper.navigation.update();
        //   });
        // }}
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}> 
            <BlogCard  text={data.title} link={data.link} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

export default LatestCardsWrapper;
