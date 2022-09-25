import "./aboutUs.scss";
// img
import aboutUsImg from "../../../assets/img/aboutUs.jpg";
import aboutUS1 from "../../../assets/img/aboutUs1.jpg";
import aboutUS2 from "../../../assets/img/aboutUs2.jpg";
import aboutUS3 from "../../../assets/img/aboutUs3.jpg";
import aboutUS4 from "../../../assets/img/aboutUs4.jpg";

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


            <ul className="AboutUs__box__list">
                <li className="AboutUs__box__item">
                    <img src={aboutUS1} alt="" />
                    <h2 className="AboutUs__box__title">
                    CROSS DOC
                    </h2>
                    <p className="AboutUs__box__text">
                    5 cross docks Transfer of..
                    </p>
                    <button className="AboutUs__box__btn">Подробнее</button>
                </li>
                <li className="AboutUs__box__item">
                    <img src={aboutUS1} alt="" />
                    <h2 className="AboutUs__box__title">
                    CROSS DOC
                    </h2>
                    <p className="AboutUs__box__text">
                    5 cross docks Transfer of..
                    </p>
                    <button className="AboutUs__box__btn">Подробнее</button>
                </li>
                <li className="AboutUs__box__item">
                    <img src={aboutUS1} alt="" />
                    <h2 className="AboutUs__box__title">
                    CROSS DOC
                    </h2>
                    <p className="AboutUs__box__text">
                    5 cross docks Transfer of..
                    </p>
                    <button className="AboutUs__box__btn">Подробнее</button>
                </li>
                <li className="AboutUs__box__item">
                    <img src={aboutUS1} alt="" />
                    <h2 className="AboutUs__box__title">
                    CROSS DOC
                    </h2>
                    <p className="AboutUs__box__text">
                    5 cross docks Transfer of..
                    </p>
                    <div className="AboutUs__box__box">
                    <button className="AboutUs__box__btn">Подробнее</button>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default AboutUs;