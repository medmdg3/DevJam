import React from "react";
import './elements.css'
import GoldStar from './assets/Gold_Star.svg.png'
import GrayStar from './assets/Gray_Star.png'
import pdp from './assets/pdp.png'
function bigger(a,b){
    return a>b;
}
export function Review({Image,Name,Date,Content,Rating}){
    if(Image=="")Image=pdp;
    Content.trim();
    Content="\t".concat(Content);
    if(Content.length>100){
    let C="";
    for(let i=0;i<100;i++)C+=Content[i];
    Content=C;
    }
    return(
        <div className="Comment">
            <div>
        <img className="Profile_Comment" src={Image}/>
        <div className="Comment_Name">{Name}</div>
        <div className="Ratings">
        {bigger(Rating,0) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,1) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,2) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,3) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,4) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        </div>
        </div>
        <div className="Comment_Content">{Content}</div>
        <div className="Comment_Date">{Date}</div>
        </div>
    );
}
export function Reviews(Image,Name,Date,Content,Rating){
    if(Image=="")Image=pdp;
    Content.trim();
    Content="\t".concat(Content);
    if(Content.length>100){
    let C="";
    for(let i=0;i<100;i++)C+=Content[i];
    Content=C;
    }
    return(
        <div className="Comment">
            <div>
        <img className="Profile_Comment" src={Image}/>
        <div className="Comment_Name">{Name}</div>
        <div className="Ratings">
        {bigger(Rating,0) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,1) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,2) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,3) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        {bigger(Rating,4) ? <img className="Rating" src={GoldStar}/>:<img className="Rating" src={GrayStar}/>}
        </div>
        </div>
        <div className="Comment_Content">{Content}</div>
        <div className="Comment_Date">{Date}</div>
        </div>
    );
}