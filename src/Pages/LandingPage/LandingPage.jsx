import MainContent from "../../component/MainContent/MainContent";
import About from "../../component/About/About";
import Skills from "../../component/Skills/Skills";
import Experience from "../../component/Experience/Experience";
import Project from "../../component/Projects/Project";
import Contact from "../../component/Contact/Contact";

const LandingPage = () => {
  return (
    <div>
      <MainContent />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default LandingPage;
