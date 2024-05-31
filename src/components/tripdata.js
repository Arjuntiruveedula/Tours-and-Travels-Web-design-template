import "./trips.css"
const Tripdata=(props)=>{
  return <div className="t-card">
            <div className="im">
              <img alt="tripimg" src={props.img}/>
            </div>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
  
        </div>
}

export default Tripdata