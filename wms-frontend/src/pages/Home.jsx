import TopNavbar from "../components/LandingComponent/TopNavbar";
import Header from "../components/LandingComponent/Header";
import Services from "../components/LandingComponent/Services";
import Projects from "../components/LandingComponent/Projects";
import Pricing from "../components/LandingComponent/Pricing";
import Contact from "../components/LandingComponent/Contact";
import Footer from "../components/LandingComponent/Footer";


const Home = () => {
  return (
    <div>
     <TopNavbar />
      <Header />
      <Services />
      <Projects />
      
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
};

export default Home;
