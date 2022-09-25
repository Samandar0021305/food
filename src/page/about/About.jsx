import Topbar from "../../components/topbar/Topbar"
import HeaderAbout from "../../components/about-components/header/HeaderAbout.jsx";
import SectionAbout from "../../components/about-components/section/Section-about";
import AboutUs from "../../components/about-components/aboutUs/AboutUs";

function About(){
    return(
        <>
         <Topbar />
         <HeaderAbout />
         <SectionAbout />
         <AboutUs />
        </>
    )
}

export default About