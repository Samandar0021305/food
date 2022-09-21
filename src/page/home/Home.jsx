import AboutSection from "../../components/home-components/about-section/About-section";
import Header from "../../components/home-components/header/Header";
import Section from "../../components/home-components/section/Section";
import Topbar from "../../components/topbar/Topbar";

function Home(){
    return(
        <div>
            <Topbar />
            <Header />
            <Section />
            <AboutSection />
        </div>
    )
}

export default Home;