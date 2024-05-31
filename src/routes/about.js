import Hero from "../components/hero";
import Navmenuitems from "../components/nav-menu";
import aimg from "../assests/about.jpg"
import Footer from "../components/footer";
import Aboutdata from "../components/aboutdata";

const About=()=>{
  return <>
      <Navmenuitems/>
      <Hero clsName="hero-mid"
            aimg={aimg} 
            title="About Us"
            />
      <Aboutdata/>      
      <Footer/>
  </>
}
export default About;