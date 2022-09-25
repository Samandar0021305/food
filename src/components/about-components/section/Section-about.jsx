import "./section-about.scss";


function SectionAbout(){
    return(
        <section className="sectionAbout">
            <div className="container">
                <h2 className="sectionAbout__title">Development plan</h2>
                <ul className="sectionAbout__list">
                    <li className="sectionAbout__item">
                        <h2 className="sectionAbout__list__title">1</h2>
                        <h3 className="sectionAbout__list__subject">2018</h3>
                        <p>start of</p>
                        <p>construction</p>
                    </li>
                    <li className="sectionAbout__item">
                        <h2 className="sectionAbout__list__title">2</h2>
                        <h3 className="sectionAbout__list__subject">2021</h3>
                        <p>launch of a</p>
                        <p>shopping center</p>
                    </li>
                    <li className="sectionAbout__item">
                        <h2 className="sectionAbout__list__title">3</h2>
                        <h3 className="sectionAbout__list__subject">2022</h3>
                        <p>launch of the</p>
                        <p>second market</p>
                    </li>
                    <li className="sectionAbout__item">
                        <h2 className="sectionAbout__list__title">4</h2>
                        <h3 className="sectionAbout__list__subject">2023</h3>
                        <p>launch of processing</p>
                        <p>production</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}


export default SectionAbout;