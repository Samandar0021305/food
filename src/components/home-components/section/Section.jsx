import { useState } from "react";
import "./section.scss";
import api from "./SectionApi.js";

function Section(){
    const [Api,SetApi] = useState(api)
    console.log(Api);
    return(
        <section>
              <div className="section__box">

              </div>

              <div className="section__wrapper">
                 <div className="container">
                    
                 </div>
             </div> 
        </section>
    )
}

export default Section;