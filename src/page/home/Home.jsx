// components
import AboutSection from "../../components/home-components/about-section/About-section";
import Header from "../../components/home-components/header/Header";
import Section from "../../components/home-components/section/Section";
import Topbar from "../../components/topbar/Topbar";
import News from "../../components/home-components/news/News";
import Iframe from "../../components/home-components/iframe/Iframe";
import Footer from "../../components/home-components/footer/Footer";


function Home(){
    return(
        <div>
            <Topbar />
            <Header />
            <Section />
            <AboutSection />
            <News />
            <Iframe />
            <Footer />
        </div>
    )
}

export default Home;