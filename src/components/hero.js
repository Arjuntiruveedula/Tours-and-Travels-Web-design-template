
import "./hero.css";

const  Hero=(props)=>{
  
  return <>
        <div className={props.clsName}><img alt="heroimg" src={props.aimg}/></div>
        <div className="des">
        <span>{props.title}</span>
        <p>{props.text}
        </p>
        <a className={props.btname} href={props.btnurl}>{props.btn}</a>
        </div>
          
        </>
}
export default Hero;