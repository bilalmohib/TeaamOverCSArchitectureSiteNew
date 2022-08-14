// import App from 'next/app'

// Import styles 
import "../src/layouts/Home/SlideShow/SlideShow.css";
import "../src/index.css";
import "../src/Containers/AboutUs/AboutUs.css";
import "../ContainerCSS/Blogs.css";

import "../src/components/ImagesSlider/ImagesSlider.css";
import "swiper/swiper-bundle.min.css";

// src\index.css

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;