import Tripdata from "./tripdata"
import img1 from "../assests/france.jpg"
import img2 from "../assests/indonesia.jpg"
import img3 from "../assests/malaysia.jpg"
import "./trips.css"
const Trip=(props)=>{
  return<div className="tripcard">
          <h1>Recent Trips</h1>
          <span>You can discover unique destinations using Google Maps.</span>
          <div className="t-menu">
            <Tripdata 
            
            img={img1}            heading="Trip in France"
            text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
            />

     <Tripdata   
            img={img2}            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Sulawesi, and parts of Borneo and New Guinea."
            />

<Tripdata 
            img={img3}            heading="Trip in Malaysia"
            text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
            />
          </div>
        </div>
}
export default Trip