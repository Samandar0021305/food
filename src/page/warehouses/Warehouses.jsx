import Topbar from "../../components/topbar/Topbar";

import WarehousesHader from "../../components/warehouses/warehousesHeader/WarehousesHeader.jsx";
import WarehousesSection from "../../components/warehouses/warehousesSection/WarehousesSection";

function Warehouses(){
    return(
        <>
         <Topbar /> 
         <WarehousesHader />
         <WarehousesSection />
        </>
    )
}

export default Warehouses;