import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import About from "./components/About/About";
import Circle from "./components/Circle/Circle";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Circle />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
