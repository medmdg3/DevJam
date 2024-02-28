import React, { useState } from "react";
import "./Header.css";
import Logo from "./assets/Logo.png"
import Crown from './assets/Crown.png'
import { useParams } from "react-router-dom";
function Actuality(){
    return (
        <div className="Element">
            <label className="Option" onClick={()=>{}}>Match</label>
            <label className="Option" onClick={()=>{}}>Event</label>
        </div>
    );
}
function Explore(){
    return (
        <select className="Element">
            <option className="Option" onClick={()=>{}}>Restaurent</option>
            <option className="Option" onClick={()=>{}}>Hotels</option>
            <option className="Option" onClick={()=>{}}>InDrive</option>
        </select>
    );
}
export function Header({Selected,f}){
    let [A,B] =useState(false);
    return (
        <div className="Header">
            <img className="Logo" src={Logo}/>
            <a className={Selected=="Home"? "Selected  Element":"Element Normal"} onClick={(event)=>f("Home")}>HOME</a>
            <a className={Selected=="Actuality"? " Selected Element":"Element Normal"} onClick={(event)=>f("Actuality")} >Actuality </a>
            <a className={(Selected=="ExploreHot" || Selected=="ExploreFood")? "Selected Element":"Element Normal"}  onMouseEnter={()=>{B(true);}}  onMouseLeave={()=>{B(false);}}>{A?<>
            <a className={(Selected=="ExploreHot" )? "Selected Element":"Element Normal"} onClick={(event)=>f("ExploreHot")} >Hotels</a>
            <a className={( Selected=="ExploreFood")? "Selected Element":"Element Normal"} onClick={(event)=>f("ExploreFood")} >Food
            </a>
            </>:<>EXPLORE &#9660;</>}</a>
            <a className={Selected=="Community"? "Selected Element":"Element Normal"} onClick={(event)=>f("Community")}>COMMUNITY</a>
            <a className={Selected=="MarketPlace"? "Selected Element":"Element Normal"} onClick={(event)=>f("MarketPlace")}>MARKET PLACE</a>
            <a className={Selected=="Premium"? "Premium Selected":"Premium Normal"} onClick={(event)=>f("Premium")}><img src={Crown} className="PremiumLogo"/> ACTIVATE PREMIUM </a>
        </div>
    );
}