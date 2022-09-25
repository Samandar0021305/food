import Contacts from "../../components/contacts/Contacts";
import Floor from "../../components/make/floor/Floor";
import MakeHeader from "../../components/make/header/Makeheader";
import MakeSection from "../../components/make/section/MakeSection";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/home-components/footer/Footer";
function Market(){
    return(
        <>
        <Topbar />
        <MakeHeader />
        <MakeSection />
        <Floor />
        <Contacts />
        <Footer />
        </>
    )
}


export default Market;