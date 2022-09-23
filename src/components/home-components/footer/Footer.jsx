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
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;