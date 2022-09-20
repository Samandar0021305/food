import "./section.scss";
import api from "./SectionApi.js";

function Section(){
    
    return(
        <section>
              <div className="section__box">

              </div>

              <div className="section__wrapper">
                 <div className="container">
                    <ul className="section__list">
                        {api.map((element)=>{
                            return(
                                <li key={element.id} className="section__item">
                                <img src={element.img} alt="logo" />
                                <h2>{element.text}</h2>
                            </li>
                            )
                        })}
                    </ul>
                 </div>
             </div> 
        </section>
    )
}

export default Section;