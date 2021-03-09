import "./App.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
