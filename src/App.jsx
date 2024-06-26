import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Project from "./Components/Programs/project";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title
        title={"OUR PROGRAMS"}
        subtitle={"Learn more about our programs"}
      />
      <div className="line">
        <Project />
      </div>
      <Title title={"ABOUT US"} subtitle={"Know more about us"} />
      <About />
    </>
  );
}

export default App;
