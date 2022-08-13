import React, { useState, useEffect } from "react";

const imgs = [
  { src: '/assets/images/slider-img-1.jpg', caption: "1st img" },
  { src: '/assets/images/slider-img-2.jpg', caption: "Second img" },
  { src: '/assets/images/slider-img-3.jpg', caption: "3rd img" },
  { src: '/assets/images/slider-img-4.jpg', caption: "4th img " },
  { src: '/assets/images/slider-img-5.jpg', caption: "5th img" },
  { src: '/assets/images/slider-img-6.jpg', caption: "6th img" }
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const onArrowsClick = (direction) => {
    if (currentSlide === imgs.length - 1 && direction > 0) setCurrentSlide(0);
    else if (currentSlide === 0 && direction < 0)
      setCurrentSlide(imgs.length - 1);
    else setCurrentSlide(currentSlide + direction);
  };

  useEffect(()=>{
    const timer = setTimeout(()=>onArrowsClick(1), 4000);

    return ()=>clearTimeout(timer)
  }, [currentSlide])

  const renderedSlides = imgs.map((img, index) => {
    const display = index === currentSlide ? "block" : "none";

    return (
      <div key={index} className="fade" style={{ display }}>
        <img alt={img.caption} src={img.src} style={{ width: "100%" }} />
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
