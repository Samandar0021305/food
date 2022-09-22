import "./about-section.scss";

import api from "./AboutsSection.js";

function AboutSection(){
    return(
        <section className="aboutsection">
            <div className="container">
                <h2 className="aboutsection__title">About us</h2>
                <ul className="aboutsection__list">
                    <li className="aboutsection__item">
                        <p>The largest wholesale markets for fruits, vegetables and one of the largest food distribution centers in Uzbekistan, located on an area of ​​60 hectares. Fresh food markets serve independent retailers, supermarket chains, service providers, exporters, food processing companies, restaurants and food service establishments.</p>
                    </li>
                    <li className="aboutsection__item">
                        <p>Infrastructure "FOODCITY" includes two types of shopping malls where you can make purchases in large quantities at wholesale prices and in small quantities at very reasonable prices. Office - hotel buildings, warehouse complexes and premises, various restaurants and cafes, parking for trucks and cars, waiting areas for trucks.</p>
                    </li>
                </ul>

                <ul className="aboutsection__box__list">
                        {api.map((element)=>{
                            return(
                                <li key={element.id}>
                                    <img src={element.img} alt="logo" />
                                    <p>{element.text}</p>
                                    <h2>{element.title}</h2>
                                </li>
                            )
                        })}
                </ul>

            </div>
        </section>
    )
}

export default AboutSection;
