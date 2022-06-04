import React from "react";
export default function Card(props){

    return(
   
        <div className="w-52 bg-yellow-100 p-2 m-2 inline text-center rounded-2xl flex flex-col justify-between">
       <div className=" ">
       <img src={props.url} className="w-max h-max rounded-xl" alt="no available"></img>
       </div>
       <div className="flex justify-between">
       <p>{props.name}</p>
       <p>{props.price}</p>
       </div>
     
        </div>
      
    )
}