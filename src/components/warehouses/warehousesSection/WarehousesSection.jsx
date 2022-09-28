import "./WarehousesSection.scss";

import WarehousesSection1 from "../../../assets/img/WarehousesSection1.jpeg"
import WarehousesSection2 from "../../../assets/img/WarehousesSection2.jpeg"
import WarehousesSection3 from "../../../assets/img/WarehousesSection3.jpeg"
import WarehousesSection4 from "../../../assets/img/WarehousesSection4.jpeg"

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
                <img src={WarehousesSection2} alt="logo" />
               </li>
               <li className="WarehousesSection__list__two__item">
                    <h2>Cross docking</h2>
                    <p>Delivery of goods sent from different manufacturers. This method allows you to combine
                    (consolidate) goods from different suppliers into one batch, which will then be sent to the customer.
                    Small batches of various goods are first brought to the cross-docking site, after which they
                    are reloaded into one transport and sent to the end customer. Cross-docking also allows you to get bulk from
                    manufacturer, and then send it in small quantities to various retail outlets.</p>
               </li>
            </ul>    

             <span className="WarehousesSection__bg"></span> 


             <ul className="WarehousesSection__list__one">
                    <li className="WarehousesSection__list__item">
                        <img src={WarehousesSection3} alt="" />
                    </li>
                    <li className="WarehousesSection__list__item">
                        <h2>Large scale storage</h2>
                        <p>For stowage and handling of goods, the following equipment is used: forklifts for
                            unloading / loading and delivering goods around the warehouse, stackers for installing pallets on racks, reach trucks
                            for climbing to great heights. The presence of all three types of equipment allows you to carefully handle
                            loads. You can also move pallets using a pallet truck, and for picking and sorting
                            picking carts serve as orders.</p>
                    </li>
                </ul>
             <ul className="WarehousesSection__list__one">
                    <li className="WarehousesSection__list__item">
                        <img src={WarehousesSection4} alt="" />
                    </li>
                    <li className="WarehousesSection__list__item">
                        <h2>Small-sized storage</h2>
                        <p>For small goods, shelf storage in individual and group packages for:
                    three-tiered mezzanine;
                    a three-tiered mezzanine in pull-out containers;
                    on the lower tier of pallet racks;
                    racks in small containers.</p>
                    </li>
                </ul>
        </div>
    )
}

export default WarehousesSection;