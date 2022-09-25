import  "./floor.scss";


import img from "../../../assets/img/razmytyj.jpg";
import GIDnyj from "../../../assets/img/GIDnyj.jpg";

function Floor(){
    return(
        <div className="floor">
            <div className="floor__bg">
             <h2>Availability of quality and fresh products all year round</h2>
            </div>

                <div className="container">
                    <h3 className="floor__subject">1 floor</h3>
                    <img className="floor__img" src={img} alt="" />
                
                <h4 className="floor__rek">Monthly tours</h4>
                    <ul className="floor__list">
                        <li className="floor__item">
                          <img src={GIDnyj} alt="logo GIDnyj" />
                        </li>     
                        <li className="floor__item">
                            <p>
                                Interested foodies, educational groups, international visitors, study groups and those who
                                is engaged in the production of fresh products or the food industry, it is suggested to take a guided tour of
                                lively atmosphere of the new market, the largest wholesale markets for fresh fruits and vegetables.
                                Tours are operated by the preferred operator of FOOD CITY
                                For people who have never visited FOOD CITY, deciding where to start can seem a little daunting.
                                A guided tour with trained guides will make navigating the morning hustle and bustle of markets safe and easy. Guides
                                know how markets work, know their fresh produce and know market people. They make it possible to experience
                                real taste of market life.
                                MONTHLY TOURS
                            </p>
                            <p>Join trained guides on a FOOD CITY tour. Experience the unique atmosphere of the food markets,
                                manufacturers. Round off with breakfast at one of the market’s lively cafes.
                                FOOD CITY
                                • Monthly tours run on the first Friday of the month (excluding public holidays).
                                • Tours start at 6:30 am and last from 1 to 1.5 hours.
                                • Tours are for a maximum of 20 people and must have a minimum of 5 participants.
                                Fees apply and reservations are required.
                                Tours can be dangerous without prior notice and without obligation.</p>
                        </li>
                    </ul>

                </div>
        </div>
    )
}

export default Floor;