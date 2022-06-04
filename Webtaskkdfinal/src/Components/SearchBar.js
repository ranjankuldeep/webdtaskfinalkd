import React, { useContext } from "react";
import  {productstobelistedcontext}  from "../store/context/producttobelisted";
import { Typography } from "@material-tailwind/react";
import styles from './searchbar.css';
 export default function SearchBar(props){
     const pctx=useContext(productstobelistedcontext);

      function submithandler(e){e.preventdefault()};

   

    return(
<div className="text-center ">
<form className="" onSubmit={submithandler}>
  <label>
   <Typography variant="h1">Search</Typography>
    <input type="text"  className="rounded-2xl text-6xl shadow-xl border-black"   name="product" onChange={pctx.search} />
  </label>

</form>
<hr className="mt-6"></hr>
        </div>
        
    )
    }