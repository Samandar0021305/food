import "./makesection.scss";

import img1 from "../../../assets/img/market-1.png";
import img2 from "../../../assets/img/market-2.png";
import img3 from "../../../assets/img/market-3.png";
import img4 from "../../../assets/img/market-4.png";
import img5 from "../../../assets/img/market-5.png";
import img6 from "../../../assets/img/market-6.png";
import img7 from "../../../assets/img/market-7.png";
import img8 from "../../../assets/img/market-8.png";

function MakeSection(){
    return(
        <section className="makesection container">
            <h2 className="makesection__title">
                Market
            </h2>

            <ul className="makesection__list">
                <li className="makesection__item">
                    <img src={img1} alt="" />
                    <h3>24/7</h3>
                    <p>Work time</p>
                </li>
                <li className="makesection__item">
                    <img src={img2} alt="" />
                    <h3>2 500</h3>
                    <p>Stores and showcases</p>
                </li>
                <li className="makesection__item">
                    <img src={img3} alt="" />
                    <h3>84</h3>
                    <p>Equal to soccer fields</p>
                </li>
                <li className="makesection__item">
                    <img src={img4} alt="" />
                    <h3>3 000</h3>
                    <p>Parking spaces</p>
                </li>
                <li className="makesection__item">
                    <img src={img5} alt="" />
                    <h3>16 300 m2</h3>
                    <p>Cross docks</p>
                </li>
                <li className="makesection__item">
                    <img src={img6} alt="" />
                    <h3>17 500 m2</h3>
                    <p>Trade bazaar</p>
                </li>
                <li className="makesection__item">
                    <img src={img7} alt="" />
                    <h3>3 000 m2</h3>
                    <p>Hotel</p>
                </li>
                <li className="makesection__item">
                    <img src={img8} alt="" />
                    <h3>40</h3>
                    <p>Cargo parking</p>
                </li>
            </ul>

        </section>
    )
}

export default MakeSection;
