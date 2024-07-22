
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sdlc from "./components/Sdlc";
import Team from "./components/Team";
import Technology from "./components/Technology";

export default function Home() {
  return (
    <main>
      <div className="min-h-full min-w-full ">
       
          <Navbar/>
          <Hero/>
          <Technology/>
          <Projects/>
          <Sdlc/>
          <Team/>
          <FAQ/>
          <Footer/>
      </div>
    </main>
  );

}
