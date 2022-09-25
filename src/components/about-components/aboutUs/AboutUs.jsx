import "./aboutUs.scss";

import aboutUsImg from "../../../assets/img/aboutUs.jpg";

function AboutUs(){
    return(
        <div className="AboutUs container">
            <h2 className="AboutUs__subject">ABOUT US</h2>
            <ul className="AboutUs__list">
                  <li className="AboutUs__item">
                    <img src={aboutUsImg} alt="logo" />
                  </li>
                  <li className="AboutUs__item">
                    <p className="AboutUs__text">FOODCITY is the first agricultural cluster in Uzbekistan and the most modernized trading platform. For the first time in Uzbekistan, the Cross-Docking logistics operation system was applied, this system excludes the stage of storing goods in a warehouse, in simple terms you buy a product from the place of its assembly, avoiding a bunch of warehouses and resellers, thereby you get a fresh product directly from the place of its germination, and in this area there are 5 cross-docks with a different range of products.</p>
                  </li>
            </ul>
        </div>
    )
}

export default AboutUs;