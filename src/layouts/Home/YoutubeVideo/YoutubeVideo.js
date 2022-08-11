import React from "react";
import styles from "./YoutubeVideo.module.css";
import { IoClose } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Popup = ({ src, state }) => {
  const { setShow } = state;
  return (
    <div className={styles.video_popup}>
      <IoClose
        className={styles.close_icon}
        onClick={() => setShow(false)}
        color="white"
        size={40}
      />
      <div className={styles.video_popup_wrapper}>
        <iframe
          className="youtube_video"
          src={`${src}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

function YoutubeVideo({ src, popup = false }) {
  const { thumbnailID, disc } = popup;
  const [show, setShow] = React.useState(false);

  return (
    <div>
      {popup ? (
        <>
          <div className={`${styles.youtubeVideos} mb-15px`}>
            <LazyLoadImage
              src={`https://img.youtube.com/vi/${thumbnailID}/0.jpg`}
              alt=""
              className="youtube_video_thumbnail pointer "
              onClick={() => setShow(!show)}
            />
          </div>

          {disc ? <p className="fs-16px gray">{disc}</p> : ""}

          {show ? <Popup src={src} state={{ setShow }} /> : ""}
        </>
      ) : (
        <div className={`${styles.youtubeVideos} `}>
          <iframe
            className="youtube_video"
            src={`${src}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default YoutubeVideo;
