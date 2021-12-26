import Navbar from "components/Navbar/Navbar";
import Hero from "layouts/Home/Hero/Hero";
import Services from "layouts/Home/Services/Services";
import YoutubeVideos from "layouts/Home/YoutubeVideos/YoutubeVideos";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="mb-70px">
        <Hero />
      </div>
      <Services />
      <div className="mb-75px">
        <YoutubeVideos />
      </div>
    </div>
  );
}

export default Home;
