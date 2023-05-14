import "./index.css";

import Navbar from "./components/Navbar";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App lg:px-8 h-fit">
      <Navbar />
      <div className="content-container md:px-10 lg:px-15">
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
