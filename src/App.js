import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Home animation="fade-down" />
      <Services animation="fade-up" />
      <Portfolio animation={"fade-up"} />
      <About animation={"fade-up"} />
      <Footer animation={"fade-up"} />
    </div>
  );
}

export default App;
