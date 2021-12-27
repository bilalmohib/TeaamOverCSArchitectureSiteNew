import "./App.css";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import GetQuote from "pages/GetQuote/GetQuote";
import Projects from "pages/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
