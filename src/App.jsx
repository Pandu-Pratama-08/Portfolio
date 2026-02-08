import React from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

// import section
import HomeSection from "./components/sections/home";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Projects from "./components/sections/project";
import Certificates from "./components/sections/certificate";
import Contact from "./components/sections/contact";

function App() {
  return (
    <div className="font-sans transition-colors duration-300 bg-white text-gray-900 dark:bg-black dark:text-gray-100">
      <Navbar />

      <main>
        <HomeSection />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
