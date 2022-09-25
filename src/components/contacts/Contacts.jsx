import "./contacts.scss";

function Contacts(){
    return(
        <div className="contacts container">
            <h2 className="contacts__title">Book your tour</h2>
            <form className="contacts__form">
                <div className="contacts__box">
                    <input type="tel"  placeholder="Your phone" />
                    <input type="email" placeholder="your E-mail" />
                </div>
                <input className="contacts__input" type="text" />
                <br />
                <textarea placeholder="Message" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

export default Contacts;