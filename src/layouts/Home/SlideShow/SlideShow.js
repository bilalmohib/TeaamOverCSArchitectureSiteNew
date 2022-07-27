import React, { useState } from "react";
import "./SlideShow.css";

import img1 from "assets/images/slideshow-img-1.jpg";
import img2 from "assets/images/slideshow-img-2.jpg";
import img3 from "assets/images/slideshow-img-3.jpg";
import img4 from "assets/images/slideshow-img-4.jpg";
import img5 from "assets/images/slideshow-img-5.jpg";

const imgs = [
  { src: img1, caption: "1st img" },
  { src: img2, caption: "Second img" },
  { src: img3, caption: "3rd img" },
  { src: img4, caption: "4th img " },
  { src: img5, caption: "5th img" }
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onArrowsClick = (direction) => {
    if (currentSlide === imgs.length - 1 && direction > 0) setCurrentSlide(0);
    else if (currentSlide === 0 && direction < 0)
      setCurrentSlide(imgs.length - 1);
    else setCurrentSlide(currentSlide + direction);
  };

  const renderedSlides = imgs.map((img, index) => {
    const display = index === currentSlide ? "block" : "none";

    return (
      <div key={index} className="fade" style={{ display }}>
        <div className="numbertext">{`${index + 1} \\ ${imgs.length}`}</div>
        <img alt={img.caption} src={img.src} style={{ width: "100%" }} />
        <div className="text">Caption Text</div>
      </div>
    );
  });

  const renderedDots = imgs.map((img, index) => {
    const active = index === currentSlide ? "active" : "";
    return (
      <span
        key={index}
        className={`dot ${active}`}
        onClick={() => {
          setCurrentSlide(index);
        }}
      ></span>
    );
  });

  return (
    <>
      <div className="slideshow-container">
        {renderedSlides}
        <a className="prev" onClick={() => onArrowsClick(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => onArrowsClick(1)}>
          &#10095;
        </a>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>{renderedDots}</div>
    </>
  );
};

export default SlideShow;
