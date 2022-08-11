import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import whatsappIcon from "assets/images/whatsapp-btn.png";

// import heroImg from "assets/images/construction.jpg";

import videosource from "../../../assets/FinalzationVideo.mp4";
import "./index.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  const [muted, setMuted] = useState(true);

  const handleToggleMute = () => setMuted(current => !current);

  return (
    <div className={styles.hero}>
      <video autoPlay muted={muted} loop id="myVideo">
        <source src={videosource} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="content">
        <div className={styles.hero_center}>
          {/* <p className="fs-52px white weight-5 mb-15px text-center">
            Let’s inspire you with our work
          </p>
          <p className="fs-21px white weight-3 font-open-sans text-center mb-15px">
            Click on any of the services offered by Galleria Designs to explore
            our portfolio
          </p> */}

          {/* <div className={styles.hero_cards}>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Architecture
          </Link>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Interior Design
          </Link>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Construction
          </Link>
          <Link to="/" className="font-roboto fs-25px white weight-4">
            Project Management
          </Link>
        </div> */}
        </div>
        <button onClick={handleToggleMute} className="control">
          {muted ? "Unmute" : "Mute"}
        </button>

      </div>

      <div className={styles.whatsappBtn}>
        <div className={`${styles.whatsappBtnStatus} fs-16px white`}>
          WhatsApp us
        </div>
        <LazyLoadImage alt={"adskjhasd"} src={whatsappIcon} />
      </div>

      {/* <div className={styles.scrollIndicator}></div> */}
    </div>
  );
}

export default Hero;

// const [images, setImages] = React.useState([
//   "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
//   "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn",
//   "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg",
//   "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg",
// ]);
// const [currentImage, setCurrentImage] = React.useState(0);

// const switchImage = () => {
//   if (currentImage < images.length - 1) {
//     setCurrentImage(currentImage + 1);
//   } else {
//     setCurrentImage(0);
//   }
//   return currentImage;
// };

// React.useEffect(() => {
//   setInterval(switchImage, 1000);
// })
