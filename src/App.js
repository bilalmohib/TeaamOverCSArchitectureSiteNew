import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
