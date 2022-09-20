import "./topbar.scss";

import {Link} from "react-router-dom"

// img
import img from "../../assets/icon/topbar-logo.svg";
import toogle from "../../assets/icon/navbar-toogle.png";


function Topbar(){
    const style = {
        color:"#000",
        textTransform:"uppercase",
        fontSize:"14px",
        marginBottom:"7px",
        opacity:"0.5"
    }

   

    return(
        <nav className="navbar container">
             <img className="navbar__img" src={img} alt="logo" />
                <img className="navbar__toogle" src={toogle} alt="navbar toogle" />
             <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                       Home
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                       About Us
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                       Market
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                    WAREHOUSES
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                    FOR TENANTS
                    </Link>
                    
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                    CAREER
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                    Hotel
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                    news
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/food" style={style}>
                    Contacts
                    </Link>
                    <span className="navbar__hover"></span>
                </li>
             </ul>
        </nav>
    )
}

export default Topbar;