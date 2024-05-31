import React from 'react';

import {Route,Routes} from "react-router-dom";
import Home from './routes/home';
import Contact from './routes/contact';
import Service from './routes/service';
import About from './routes/about';


const App=()=>{

  
  return (<>
     
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/routes/about" element={<About/>}/>
        <Route path="/routes/contact" element={<Contact/>}/>
        <Route path="/routes/service" element={<Service/>}/>
      </Routes>
      
</>)
}
export default App;