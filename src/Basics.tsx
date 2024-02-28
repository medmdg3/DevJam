import './Basics.css'
import { Review } from './Comments';
import './elements.css'
export function Understand(Text){
    console.log(Text);
    return (<div>
        {Text.map((value)=>{
            if(value[0]=='BT')return BT(value[1]);
            if(value[0]=='FP')return FP(value[1]);
            if(value[0]=='PFP')return PFP(value[1]);
            if(value[0]=='HP')return <div  className='Blck'>{HP(value[1],false)}{HP(value[2],true)}</div>
        })}
    </div>);
}
export function BT(C){
    console.warn(C);
    if(C[0]=="Comments")
    return (
    <div className='Blck'>
    {
        C[1].map((value,index)=>{
          if(index%3)return (<></>);
           console.log(index)
          if(index+1==C[1].length){
            return (
              <div className='SameLine'>
           <Review Date={C[1][index][2]} Content={C[1][index][0]} Name={C[1][index][3]} Image={C[1][index][4]} Rating={C[1][index][1]}/>
           
           </div>
             );}
             if(index+2==C[1].length){
              return (
                <div className='SameLine'>
             <Review Date={C[1][index][2]} Content={C[1][index][0]} Name={C[1][index][3]} Image={C[1][index][4]} Rating={C[1][index][1]}/>
             <Review Date={C[1][index+1][2]} Content={C[1][index+1][0]} Name={C[1][index+1][3]} Image={C[1][index+1][4]} Rating={C[1][index+1][1]}/>
             </div>
               );}
               if(index+2<C[1].length)
          return (
         <div className='SameLine'>
      <Review Date={C[1][index][2]} Content={C[1][index][0]} Name={C[1][index][3]} Image={C[1][index][4]} Rating={C[1][index][1]}/>
             <Review Date={C[1][index+1][2]} Content={C[1][index+1][0]} Name={C[1][index+1][3]} Image={C[1][index+1][4]} Rating={C[1][index+1][1]}/>
                        <Review Date={C[1][index+2][2]} Content={C[1][index+2][0]} Name={C[1][index+2][3]} Image={C[1][index+2][4]} Rating={C[1][index+2][1]}/>
      
      </div>
        );})}
        </div>
        );
}
export function FP(A){
    if(A[0]=="Img")
    return (
        <img className='Full_Page' src={A[1]}/>
    );
    else{
        return (
            <div className='Full_Page'>{A[1]}</div>
        );
    }
}
export function PFP(A){
    if(A[0]=="Img")
    return (
        <img className='PFull_Page' src={A[1]}/>
    );
    else{
        return (
            <div className='PFull_Page'>{A[1]}</div>
        );
    }
}
export function Text_Descript(Desc,A){

    return (
        <div className={Desc}>
        {
            A.map((val)=>{
                if(val[0]=='btn'){
                   return  <a className='Button' onClick={val[1]}>val[2]</a>
                }
                return (
                    <div className={val[0]}>{val[1]}</div>
                );
            })
        }
        </div>
    );
}
export function HP(A,lef){
    if(lef){
        if(A[0]=="Img")
            return (
                <img className='Half_PG LT_PG' src={A[1]}/>
            );
        else{
            return Text_Descript("Half_PG LT_PG", A[1]);
        }
    }else{
        if(A[0]=="Img")
            return (
                <img className='Half_PG RT_PG' src={A[1]}/>
            );
        else{
            return Text_Descript("Half_PG RT_PG", A[1]);
        }
    }
}
