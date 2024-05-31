import Navmenuitems from "../components/nav-menu.js";
import Hero from "../components/hero.js";
import aimg from "../assests/contact.jpg"
import Footer from "../components/footer.js";
import ContactForm from "../components/contactform.js";

const Contact=()=>{
  return <>
      <Navmenuitems/>
      <Hero clsName="hero-mid"
            aimg={aimg} 
            title="Contact Us"
            />
      <ContactForm/>
      <Footer/> 
  </>
}
export default Contact;