import React from "react";
import styles from "./YoutubeVideos.module.css";

function YoutubeVideos() {
  return (
    <div className="container-wrapper-2">
      <div className={styles.youtubeVideos}>
        <iframe
          className={styles.youtube_video}
          src="https://www.youtube.com/embed/huE1DmkrH70"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeVideos;
