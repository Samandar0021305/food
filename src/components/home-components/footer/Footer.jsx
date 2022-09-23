import "./footer.scss";

import img from "../../../assets/img/logo-footer.svg";

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__topbar">
                    <ul className="footer__topbar__list">
                        <li className="footer__topbar__item">
                            <img src={img} alt="logo" />
                        </li>
                        <li className="footer__topbar__item">
                            <h2>“Yangi Qo’yliq Dehqon Bozori”</h2>
                        </li>
                    </ul>

                    <ul className="footer__topbar__box__list">
                       <li className="footer__topbar__box__item">
                        <h2>Contacts</h2>
                       </li>
                       <li className="footer__topbar__box__item">
                        <a href="tel:+998555000004">+998 55 500 00 04</a>
                       </li>
                       <li className="footer__topbar__box__item">
                        <a href="mailto:info@f-city.uz">info@f-city.uz</a>
                       </li>
                    </ul>
                
                    <ul className="footer__topbar__box__list">
                    <li className="footer__topbar__box__item">
                        <h2>Address</h2>
                    </li>
                    <li className="footer__topbar__box__item">
                        <p>Tashkent region,
                            Urtachirchik district, KMekhnatabad street, 82
                            The time of receiving calls from the rental department
                        </p>
                        <p>Mon - Fri: 09:00 - 18:00</p>
                    </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer;