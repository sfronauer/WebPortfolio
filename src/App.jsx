import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProjectCarousel from "./components/ProjectCarousel";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Banner></Banner>
      </div>
        <div className="max-w-6xl mx-auto px-4">
      <div>
        <About></About>
      </div>
      <div>
        <Timeline></Timeline>
      </div>
      <div>
       <ProjectCarousel></ProjectCarousel>
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
