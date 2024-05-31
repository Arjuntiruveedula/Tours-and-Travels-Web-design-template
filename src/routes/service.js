import Hero from "../components/hero";
import Navmenuitems from "../components/nav-menu";
import aimg from "../assests/2-ea8da66e.jpg"
import Footer from "../components/footer";
import Trip from "../components/trips";

const Service=()=>{
  return <>
      <Navmenuitems/>
      <Hero clsName="hero-mid"
            aimg={aimg} 
            title="Service"
            />
      <Trip/>
      <Footer/>
  </>
}
export default Service;