import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Home />
      <About />
<Projects />
<Skills />
<Education />
<Contact />
<Footer />
    </div>
  );
}

export default App;
