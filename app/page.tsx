import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Headers from "./components/Headers";
import Navigation from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navigation />
      <Headers />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
