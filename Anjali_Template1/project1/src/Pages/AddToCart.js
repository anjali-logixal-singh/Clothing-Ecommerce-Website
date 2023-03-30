import React from "react";
import data from "../data.json";
import Header3 from "../components/Header3"
import { Link } from "react-router-dom";

export default function AddToCart() {
  

  return (
    
    <div className="container mx-auto">
    <Header3/>
    <div className="text-start">
    <a className="font-bold hover:text-amber-600 px-2"><Link to={"/"}>Home</Link></a><i class="las la-greater-than"></i><a className="font-bold hover:text-amber-600 px-2">Cart</a>
    </div>
      
    </div>
  );
}
