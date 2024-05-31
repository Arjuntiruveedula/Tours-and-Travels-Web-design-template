import React, { useState } from "react";
import './nav-menu.css';
import { Link } from "react-router-dom";
import navitems from './nav-items'
const Navmenuitems = ()=> {
  const [pos,setPos]=useState(false);
  const  handlehumb=()=>{
    setPos(!pos);

  }
  
  
  return<>
       <nav className='navbar'>
      <a  href="/"><h1 className="logoName">Zrippy</h1></a> 
      <div className="humb" >
        <i onClick={handlehumb} className={pos?"fa-solid fa-times":"fa-solid fa-bars"} ></i>
      </div>
      <div >
        <ul className={
          pos?"nav-menu active":"nav-menu"
        }>
          {navitems.map((eachitem)=>{
            return(
              <>
                <li className={eachitem.cName}>
            <i  style={{marginRight:"7px"}}class={eachitem.icon}></i>
            <Link to={eachitem.url}>{eachitem.title}</Link>
            </li>
              </>
            )
          })}
          
          <button>Sign Up</button>
        </ul>
        
      </div>
      </nav>
  </>
 
}
export default Navmenuitems;