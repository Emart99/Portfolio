import Hero from "../components/Hero";
import "../App.css"
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home({switchTheme}: {switchTheme: () => void}) {
  
  return (
    <>
      <Navbar switchTheme={switchTheme} />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


