import "./team.scss";

import user from "../../../assets/img/team-user.png";

function Team(){
    return(
        <section className="team container">
             <h2 className="team__title">
                Our team
             </h2>
             <ul className="team__list">
                <li className="team__item">
                     <img src={user} alt="" />
                     <h4>Director</h4>
                </li>
                <li className="team__item">
                     <img src={user} alt="" />
                     <h4>Deputy Director</h4>
                </li>
                <li className="team__item">
                     <img src={user} alt="" />
                     <h4>Hotel complex manager</h4>
                </li>
                <li className="team__item">
                     <img src={user} alt="" />
                     <h4>Sales Manager</h4>
                </li>
                <li className="team__item">
                     <img src={user} alt="" />
                     <h4>Head of marketing department</h4>
                </li>
                <li className="team__item">
                     <img src={user} alt="" />
                     <h4>Head of Procurement Department</h4>
                </li>
             </ul>
        </section>
    )
}

export default Team;