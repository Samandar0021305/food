import "./iframe.scss";
import Iframe1 from 'react-iframe'
function IframeX(){
    return(
        <div className="iframe container">
            <h2 className="iframe__title">How to get there?</h2>
            <ul className="iframe__list">
                <li className="iframe__item">
                    <Iframe1 className="iframe__map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3002.0223522372903!2d69.32403422018638!3d41.19948625903398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1663821791752!5m2!1sru!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe1>
                </li>
                <li className="iframe__item">
                   <h2>How to get by bus to food city</h2>
                </li>
            </ul>
        </div>
    )
}

export default IframeX;