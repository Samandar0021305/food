import "./WarehousesSection.scss";

import WarehousesSection1 from "../../../assets/img/WarehousesSection1.jpeg"

function WarehousesSection(){
    return(
        <div className="WarehousesSection container">
                <ul className="WarehousesSection__list__one">
                    <li className="WarehousesSection__list__item">
                        <img src={WarehousesSection1} alt="" />
                    </li>
                    <li className="WarehousesSection__list__item">
                        <h2>Storage services</h2>
                        <p>OOD CITY provides storage and rental services for small cells, which helps to minimize logistical
                            our client’s costs.
                            Using modern video surveillance systems, we guard the warehouse around the clock. We are for our clients
                            we provide pallets, we carry out loading and unloading of goods in any type of transport, when
                            if necessary, we use WMS (Warehouse Management System) and
                            We provide daily reporting on the movement, balances, defects and other parameters of goods. For
                            more reliability, we regularly conduct product inventories</p>
                    </li>
                </ul>
                <span className="WarehousesSection__bg"></span>

            <ul className="WarehousesSection__list__two">
               <li className="WarehousesSection__list__two__item">
               
               </li>
            </ul>     

        </div>
    )
}

export default WarehousesSection;