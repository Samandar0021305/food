import AboutSection from "../../components/home-components/about-section/About-section";
import Header from "../../components/home-components/header/Header";
import Section from "../../components/home-components/section/Section";
import Topbar from "../../components/topbar/Topbar";
import News from "../../components/home-components/news/News";

function Home(){
    return(
        <div>
            <Topbar />
            <Header />
            <Section />
            <AboutSection />
            <News />
        </div>
    )
}

export default Home;