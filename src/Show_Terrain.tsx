import React from "react";
import './elements.css'
export function Show_Terrain({Name,Capacity,Image,More,Location,Alternate,Maps}){
    console.log(Name);
    return (
    <div className="Terrain_Infos">
        <div className={"HalfBlock "+(Alternate?"Left":"Right")}><img className="Image" src={Image}/></div>
        <div className={"HalfBlock "+(Alternate?"Right":"Left")}>
        <div className="Location">{Location}</div>
        <a className="KnowMore" href={More} target="_Blank" ><div className="Title">{Name} </div></a>
        <div className="text">Capacity: {Capacity}</div>
        <a className="KnowMore" href={Maps} target="_Blank" ><div className="Maps">See in maps </div></a>
        </div>
        <br/>
    </div>
    );
}