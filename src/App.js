import { useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Testimonial from "./Components/Testimonial";
import Lodding from "./Components/Lodding";
import Projects from "./Components/Projects";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Service from "./Components/Service";

function App() {
  const [showLodding, setshowLodding] = useState(true);

  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="w-full h-full bg-[#0a012a]">
      {showLodding ? (
        <Lodding />
      ) : (
        <div className="w-full h-full">
          <Home />
          <About />
          <Skill />
          <Projects />
          <Service />
          <WhyChooseUs />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
