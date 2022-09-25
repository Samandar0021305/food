import Topbar from "../../components/topbar/Topbar"
import HeaderAbout from "../../components/about-components/header/HeaderAbout.jsx";
import SectionAbout from "../../components/about-components/section/Section-about";
import AboutUs from "../../components/about-components/aboutUs/AboutUs";
import Team from "../../components/about-components/team/Team";
import Footer from "../../components/home-components/footer/Footer";
function About(){
    return(
        <>
         <Topbar />
         <HeaderAbout />
         <SectionAbout />
         <AboutUs />
         <Team />
         <Footer />
        </>
    )
}

export default About