import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar"; 
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import Project from "./Components/Project";    
import About from "./Components/About";          
import Contact from "./Components/Contact";     
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FirstSection />
                <hr
                  style={{
                    border: "0",
                    height: "1.5px",
                    background: "rgb(97,97,140)",
                    margin: "40px 100px",
                  }}
                />
                <SecondSection />
                {/* <hr
                  style={{
                    border: "0",
                    height: "1.5px",
                    background: "rgb(97,97,140)",
                    margin: "40px 0px",
                  }}
                />
                <Footer/> */}
              </>
            }
          />
          <Route path="/Project" element={
              <Project />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
