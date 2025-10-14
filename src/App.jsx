import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";
import NavBar from "./components/NavBar";
import ProjectCarousel from "./components/ProjectCarousel";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <div className="max-w-4xl mx-auto px-4 pt-16">
        <div id="about">
          <About></About>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <InfoCard
            title="Programming languages"
            tech={["Javascript/Typescript", "C#", "Java", "Python", "C/C++"]}
          ></InfoCard>
          <InfoCard
            title="Technologies"
            tech={[
              "React/React Native",
              "TailwindCSS",
              "Quarkus",
              "ASP.NET",
              "SQL",
            ]}
          ></InfoCard>
        </div>

        <Timeline></Timeline>

        <div id="projects">
          <ProjectCarousel></ProjectCarousel>
        </div>
      </div>
      <div id="contact">
        <ContactForm></ContactForm>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
