import LatestCardsWrapper from "components/Cards/LatestCardsWrapper/LatestCardsWrapper";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Home/Hero/Hero";
import Projects from "layouts/Home/Projects/Projects";
import Services from "layouts/Home/Services/Services";
import YoutubeVideo from "layouts/Home/YoutubeVideo/YoutubeVideo";
import React from "react";
import styles from "./Home.module.css";
import blogsAndNewsData from "assets/Data/blogsAndNewsData.json";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="mb-70px">
        <Hero />
      </div>

      <div className="mb-100px">
        <div className="container-wrapper">
          <div className={styles.home_division}>
            <div className={styles.home_division_left}>
              <Services />

              <div className={`${styles.youtubeVideos} mb-75px`}>
                <YoutubeVideo src="https://www.youtube.com/embed/huE1DmkrH70" />
                <YoutubeVideo src="https://www.youtube.com/embed/huE1DmkrH70" />
              </div>
              <Projects />
            </div>
            <div className={styles.home_division_right}>
              <p className="fs-20px weight-2 mb-20px">The Latest</p>

              <div className={styles.home_division_right_cards_wrapper}>
                <div>
                  <LatestCardsWrapper
                    data={blogsAndNewsData}
                    title="Blogs & News"
                  />
                </div>
                <div>
                  <LatestCardsWrapper data={blogsAndNewsData} title="Videos" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
