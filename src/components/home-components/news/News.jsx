import "./news.scss";
import api from "./NewsApi.js";

function News (){
    return(
        <div className="news">
            <div className="container">
                <ul className="news__list">
                    {api.map((e)=>{
                        return(
                            <li key={e.id}>
                                <img src={e.img} alt="logo" />
                                <h2>{e.title}</h2>
                                <p>{e.text}</p>
                                <button className="news__btn"> More details <span></span>    </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default News;