import BlogCard from "components/Cards/BlogCard/BlogCard";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Home/Hero/Hero";
import Projects from "layouts/Home/Projects/Projects";
import Services from "layouts/Home/Services/Services";
import YoutubeVideos from "layouts/Home/YoutubeVideos/YoutubeVideos";
import React from "react";
import styles from "./Home.module.css";

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

              <div className="mb-75px">
                <YoutubeVideos />
              </div>
              <Projects />
            </div>
            <div className={styles.home_division_right}>
              <div className="mb-50px">
                <p className="fs-20px weight-2 mb-20px">Blogs</p>
                <div className={styles.home_division_cards}>
                  <BlogCard text="Blog" />
                  <BlogCard text="Blog" />
                  <BlogCard text="Blog" />
                  <BlogCard text="Blog" />
                </div>
              </div>
              <div className="mb-30px">
                <p className="fs-20px weight-2 mb-20px">Videos</p>
                <div className={styles.home_division_cards}>
                  <BlogCard text="Video" />
                  <BlogCard text="Video" />
                  <BlogCard text="Video" />
                  <BlogCard text="Video" />
                </div>
              </div>
              <div className="mb-30px">
                <p className="fs-20px weight-2 mb-20px">News</p>
                <div className={styles.home_division_cards}>
                  <BlogCard text="News" />
                  <BlogCard text="News" />
                  <BlogCard text="News" />
                  <BlogCard text="News" />
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
