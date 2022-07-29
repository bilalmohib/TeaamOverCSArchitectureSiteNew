import "./App.css";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import TodoList from "pages/TodoList";
import GetQuote from "pages/GetQuote/GetQuote";
import Projects from "pages/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceLayout from "layouts/ServiceLayout/ServiceLayout";
import Blogs from "pages/Blogs/Blogs";
import BlogModal from "components/Modal/BlogModal/BlogModal";
import BlogDescription from "pages/BlogDescription";
import React from "react";
import Videos from "pages/Videos/Videos";
import Contact from "pages/Contact/Contact";
import { layOutData } from "assets/Data/layoutData";
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  // console.log(layOutData);
  React.useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogDetails" element={<Blogs />}>
          <Route path=":blogId" element={<BlogDescription />} />
        </Route>
        <Route path="services">
          <Route index={true} element={<ServiceLayout data={layOutData} />} />
          {layOutData.cardsData.map((data, index) => (
            <Route path={`${data.linkTo}`}>
              <Route
                index={true}
                element={<ServiceLayout data={data.page} />}
              />
              {data.page.cardsData.map((data, index) => {
                return (
                  data.page && (
                    <Route path={data.linkTo}>
                      <Route
                        index={true}
                        element={<ServiceLayout data={data.page} />}
                      />

                      {data.page.cardsData.map((data, index) => {
                        return (
                          data.page && (
                            <Route path={data.linkTo}>
                              <Route
                                index={true}
                                element={<ServiceLayout data={data.page} />}
                              />

                              {data.page.cardsData.map((data, index) => {
                                return (
                                  data.page && (
                                    <Route path={data.linkTo}>
                                      <Route
                                        index={true}
                                        element={
                                          <ServiceLayout data={data.page} />
                                        }
                                      />
                                    </Route>
                                  )
                                );
                              })}
                            </Route>
                          )
                        );
                      })}
                    </Route>
                  )
                );
              })}
            </Route>
          ))}
        </Route>
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
