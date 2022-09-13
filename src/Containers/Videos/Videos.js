import React from "react";
import LatestCardsWrapper from "../../components/Cards/LatestCardsWrapper/LatestCardsWrapper";
import SimpleDropdown from "../../components/Dropdown/SimpleDropdown/SimpleDropdown";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import YoutubeVideo from "../../layouts/Home/YoutubeVideo/YoutubeVideo";
// import blogsAndNewsData from "../../../public/assets/Data/blogsAndNewsData.json";

import styles from "./Videos.module.css";

function Videos() {
  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-120px mb-100px">
        <div className="container-wrapper">
          <div className={`${styles.titleBar} mb-30px`}>
            <p className="uppercase fs-30px weight-6 darkest-red">Videos</p>
            <div className={`${styles.videos_filter} `}>
              <p className="uppercase fs-20px black weight-4">filter by</p>
              <SimpleDropdown
                title="Categories"
                options={[
                  { title: "Classical" },
                  { title: "Modern Classical" },
                  { title: "Modern" },
                  { title: "Contemporary" },
                ]}
              />
            </div>
          </div>

          <div className={styles.videos_container_wrapper}>
            <div className={styles.videos_container}>
              <YoutubeVideo
                src="https://www.youtube.com/embed/huE1DmkrH70"
                popup={{
                  thumbnailID: "huE1DmkrH70",
                  disc: "This is a Thumbnail",
                }}
              />
              <YoutubeVideo
                src="https://www.youtube.com/embed/huE1DmkrH70"
                popup={{
                  thumbnailID: "huE1DmkrH70",
                  disc: "Click On it to watch Video",
                }}
              />
              <YoutubeVideo
                src="https://www.youtube.com/embed/huE1DmkrH70"
                popup={{
                  thumbnailID: "huE1DmkrH70",
                  disc: "Disc",
                }}
              />
              <YoutubeVideo
                src="https://www.youtube.com/embed/huE1DmkrH70"
                popup={{
                  thumbnailID: "huE1DmkrH70",
                  disc: "Disc",
                }}
              />
              <YoutubeVideo
                src="https://www.youtube.com/embed/huE1DmkrH70"
                popup={{
                  thumbnailID: "huE1DmkrH70",
                  disc: "This is a Thumbnail",
                }}
              />
              <YoutubeVideo
                src="https://www.youtube.com/embed/huE1DmkrH70"
                popup={{
                  thumbnailID: "huE1DmkrH70",
                  disc: "Click On it to watch Video",
                }}
              />
            </div>
            {/* <div className={styles.right_content}>
              <div style={{ position: "sticky", top: "100px", left: 0 }}>
                <LatestCardsWrapper
                  data={blogsAndNewsData}
                  title="Table of Contents"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Videos;
