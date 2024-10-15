import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Courses from "./Components/Courses/courses";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import Admission from "./Components/Admission/admission";
import "./App.css";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Department from "./Components/Department/Department";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title title={"Courses"} subtitle={"Courses we offer"} />
      <Courses />
      <Title title={"ABOUT US"} subtitle={"About UIET"} />
      <About />
      <Title title={"ADMISSION"} subtitle={"Admission Procedure"} />
      <Admission />
      <Title title={"Departments"} subtitle={"List of departments of UIET"} />
      <Department />
      <Title title={"GALLERY"} subtitle={"Check our gallery"} />
      <Gallery />
      <Title title={"CONTACT"} subtitle={"Contact Us more details"} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
