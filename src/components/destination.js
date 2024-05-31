
import "./destination.css"


const Destination =(props)=>{
  return <>
      <div className={props.clsName}>
          <div className="descript">
            <h1>{props.maintitle}</h1>
            <p>{props.maintext}</p>
          </div>
          <div className={props.desclnm}>
            <div clsName={props.mattercls}>
              <h2>{props.title}</h2>
              <p>{props.text}</p>
            </div>
            <div className={props.imgcls}>
            <img  alt="dimage"src={props.img1}></img>
            <img alt="dimage" src={props.img2}></img>
            </div>
          </div>
      </div>
    </>
}

export default Destination