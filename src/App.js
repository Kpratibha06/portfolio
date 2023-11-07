import NavBar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/projects"
import './index.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
