import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import ProductDetails from "../Pages/ProductDetails";

export default function Trending() {
  var [productData, setProductData] = useState(data.products);
  const origData = data.products;

  function rate(rating) {
    const total = [1, 2, 3, 4, 5];
    return (
        total.map((item, i)=>(
        i < rating ?
        <i class="las la-star text-2xl"></i>
        :item > rating ?
        <i class="lar la-star text-2xl"></i>
        :<></>
  
      ))) 
    
  }

  const filterProduct = (prodType) => {
      setProductData(productData.filter((item) => {
        return item.type == prodType
       }))
  }

  // 
  
// Add to Cart function
  // function toCart(id, img1, price, prevPrice, rating){
  //   console.log(id, img1, price, prevPrice, rating)
  //   const ob = {"id":id, "img1":img1, "price":price, "prevPrice":prevPrice, "rating":rating};
  //   return (
  //       cart.push(ob)
  //   )}
 

  return (
    <div className="container mx-auto my-8">
      <p className="font-bold text-2xl">TRENDING</p>
      <div className="py-4">
        <button className="px-2 border-b-2 hover:border-black border-transparent" onClick={()=>setProductData(origData)}>ALL</button>
        <button className="px-2 border-b-2 hover:border-black border-transparent" onClick={()=>filterProduct('women')} onClickCapture={()=>setProductData(origData)}>WOMEN</button>
        <button className="px-2 border-b-2 hover:border-black border-transparent" onClick={()=>filterProduct('men')} onClickCapture={()=>setProductData(origData)}>MEN</button>
      </div>

      <div className="my-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
      {productData.map((item, i)=>(
        i < 4 ?
        <Link to={`ProductDetails/${item.id}`}>
        <div
          className="hover:shadow-xl relative group"
        >
          <a href="">
            <img
              src={item.img1}
              className="absolute hover:opacity-0 w-full px-2 md:px-1 lg:px-0 py-2"
            />
            <div className="relative opacity-0 hover:opacity-100">
              <img
                src={item.img2}
                className=" w-full px-2 md:px-1 lg:px-0"
              />
              <a className="hover:text-amber-600 group-hover:translate-y-6 group-hover:duration-700 absolute text-2xl top-2 right-4">
                <i class="las la-heart"></i>
              </a>
              <button className="text-amber-600 bg-white group-hover:-translate-y-6 group-hover:duration-1000 hover:text-white hover:bg-amber-600 absolute w-full py-2 left-0 bottom-0 border-b-2"
              // onClick={()=>toCart(item.id, item.img1, item.price, item.prevPrice, item.rating)}
              >
                <i class="las la-cart-plus"></i> add to cart
              </button>
            </div>
          </a>
          <div className="text-center py-3">
            <a className="text-slate-500 hover:text-black">{item.product}</a>
            <br />
            <a className="font-bold hover:text-amber-600">{item.name}</a><br/>
            <a>{rate(item.rating)}</a>
            <p className="font-bold">${item.price}<span className="text-red-400 font-light px-2 line-through
            ">${item.prevPrice}</span></p>
          </div>
        </div>
        </Link>
        : <></>
      ))}
      </div>

    </div>
  )
}







