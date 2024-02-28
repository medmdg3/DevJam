import React, { useState } from 'react'
import HomeP from './assets/Home2_Top.png'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './Header.tsx'
import { Comments, Get_Description, Terrains } from './Connect.tsx'
import { Show_Terrain } from './Show_Terrain.tsx'
import { Review } from './Comments.tsx'
import {  Understand } from './Basics.tsx'
let T1=await Get_Description();
let T=T1[0];
let C=await Comments("Shirts");
let S=""
function Decrypt(l:number,r:number,deg:number){
  let Ans=[];
  for(let i=l;i<r;i++){
    if(S[i]=='\''||S[i]=='"'){
      let temp="";
      for(let j=i+1;j<r;j++){
        if(S[j]==S[i]){
          
          Ans.push(String(temp));
          i=j;
          break;
        }
        temp+=S[j];
        if(S[j]=='\\'){
          
          temp+=S[j+1];
          j++;
          continue;
        }
        
      }
      continue;
    }
    if(S[i]=='['){
      let c=1;
      for(let j=i+1;j<r;j++){
        if(S[j]=='\\'){
          j++;
          continue;
        }
        if(S[j]=='[')c++;
        if(S[j]==']')c--;
        if(c==0){
          let temp=Decrypt(i+1,j,deg+1);
          Ans.push(temp);
          i=j;
          break;
        }
      }
      continue;
    }
  }
  return Ans;
}
S=T[0];
let Home=Decrypt(0,S.length,0);
S=T[1];
let Actuality=Decrypt(0,S.length,0);
S=T[2];
let ExploreHot=Decrypt(0,S.length,0);
S=T[3];
let ExploreFood=Decrypt(0,S.length,0);
S=T[4];
let MarketPlace=Decrypt(0,S.length,0);
S=T[5];
let Premium=Decrypt(0,S.length,0);
function Main(){
  let [Pge,SPage] = useState("Home");
  return (
    <div>
    <Header Selected={Pge} f={SPage}/>
    {Pge=="Home" && Understand(Home)}
    {Pge=="Actuality" && Understand(Actuality)}
    {Pge=="ExploreHot" && Understand(ExploreHot)}
    {Pge=="ExploreFood" && Understand(ExploreFood)}
    {Pge=="MarketPlace" && Understand(MarketPlace)}
    {Pge=="Premium" && Understand(Premium)}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
)
