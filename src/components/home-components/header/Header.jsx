import Api from "./HeaderApi";
import "./header.scss";
import { useState } from "react";


function Header(){
    
   const [api,setApi] = useState(Api)
   const [x,setX] = useState(1);

   const  handleOne = ()=>{
    let a = x+1
    setX(a)
    if(a == 4){
        setX(1)
    }
   }

   const handleOrqaga = ()=>{
    if(x==1){
    setX(3)
    }else if(x==2){
        setX(1)
    }else if(x==3){
        setX(2)
    }
   }
   
    return(
        <header className="header">
         <div className="container">
            <ul className="header__list">
             {
                api.map(element =>{
                    if(element.id == x){
                        return(
                            <li>
                               <button onClick={handleOrqaga}>click</button>
                               <div className="header__list__box">
                                   <span>
                                    <h2>{element.title}</h2>
                                    <p>{element.text}</p>
                                   </span>
                                   <img src={element.img} alt="" />
                               </div>
                               <button onClick={handleOne}> click</button>
                            </li>
                        )
                    }
        
                    
                })
             }
            </ul>
         </div>
        </header>
    )
}


export default Header;