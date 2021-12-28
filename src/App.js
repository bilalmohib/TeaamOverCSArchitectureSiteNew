import "./App.css";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import GetQuote from "pages/GetQuote/GetQuote";
import Projects from "pages/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceLayout from "layouts/ServiceLayout/ServiceLayout";
import { sliderData } from "assets/Data/sliderData";

const layOutData = {
  sliderData,
  pageName: "Services",
  cardsData: [
    {
      linkTo: "architecture",
      text: "ARCHITECTURE",
      disc: "ARCHITECTURE",
      img: "https://www.cannondesign.com/assets/Architecture-new-186x186.jpg",
      content: {
        sliderData,
        pageName: "architecture",
        cardsData: [
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
        ],
      },
    },
    {
      linkTo: "Interior",
      text: "Interior",
      disc: "Interior",
      img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
      content: {
        sliderData,
        pageName: "Interior",
        cardsData: [
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
        ],
      },
    },
    {
      linkTo: "Landscaping",
      text: "Landscaping",
      disc: "Landscaping",
      img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
      content: {
        sliderData,
        pageName: "Landscaping",
        cardsData: [
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
        ],
      },
    },
    {
      linkTo: "Construction",
      text: "Construction",
      disc: "Construction",
      img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
      content: {
        sliderData,
        pageName: "Construction",
        cardsData: [
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Interior",
            disc: "Interior",
            img: "https://www.cannondesign.com/assets/consulting_plannig_page-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Landscaping",
            disc: "Landscaping",
            img: "https://www.cannondesign.com/assets/Construction-Services-new-186x186.jpg",
          },
          {
            linkTo: "/",
            text: "Construction",
            disc: "Construction",
            img: "https://www.cannondesign.com/assets/engineering-new-186x186.jpg",
          },
        ],
      },
    },
  ],
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="services">
          <Route index={true} element={<ServiceLayout data={layOutData} />} />

          {layOutData.cardsData.map((data, index) => (
            <Route
              index={false}
              path={data.linkTo}
              element={<ServiceLayout data={data.content} />}
            />
          ))}

          {/* <Route path="interior" element={} />
          <Route path="landscaping" element={} />
          <Route path="construction" element={} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
