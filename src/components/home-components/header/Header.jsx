import Api from "./HeaderApi";
import "./header.scss";
import { useState } from "react";

import 'aos';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
                               <ArrowBackIcon className="header__ArrowBackIcon" onClick={handleOrqaga} />
                               <div className="header__list__box">
                                   <span data-aos="fade-right">
                                    <h2>{element.title}</h2>
                                    <p>{element.text}</p>
                                   </span>
                                   <img src={element.img} alt="" />
                               </div>
                               <ArrowForwardIcon className="header__ArrowBackIcon" onClick={handleOne} /> 
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