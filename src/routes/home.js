import Navmenuitems from "../components/nav-menu.js";
import Hero from "../components/hero.js";
import aimg from "../assests/12-e8cd6909.jpg";
import img1 from "../assests/home1.jpg";
import img2 from "../assests/malaysia.jpg";
import img3 from "../assests/home2.jpg";
import img4 from "../assests/france.jpg";
import Destination from "../components/destination.js";
import Footer from "../components/footer.js";
import Trip from "../components/trips.js";
const Home=()=>{
  return( <>
      <Navmenuitems/>
      <Hero clsName="hero"
            aimg={aimg} 
            btn="Travel Plan"
            text="Choose Your Favourite Destination" 
            title="Your Story Your Journey"
            btnurl="/"
            btname="btnc"/>

            <Destination 
                  clsName="destination"
                  maintitle="Popular Destinations"
                  mattercls="d"
                  maintext="Tours give you the opportunity to see alot ,within a timeframe"
                  desclnm="first-des"
                  title="Taal Volcano, Batangas"
                  text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                  imgcls="image"
                  img1={img1}
                  img2={img2}

            />

<Destination 
                  clsName="destination"
                  mattercls="d"
                  desclnm="first-des2"
                  title="Taal Volcano, Batangas"
                  text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                  imgcls="image"
                  img1={img3}
                  img2={img4}
            
            />

            <Trip/>

            <Footer/>

      </>);
}
export default Home;