import React, { useState } from "react";
import data from "../data.json";
import { Link, useSearchParams } from "react-router-dom";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

export default function ProductList(){
  const [productData, setProductData] = useState(data.products);
  var [currentPage, setCurrentPage] = useState(1);
  const [Filter, setFilter] = useState(false);
  const productPerPage = 4;
  const lastPage = currentPage * productPerPage;
  const firstPage = lastPage - productPerPage;

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


  // pagination
  const pagData = productData.slice(firstPage, lastPage);

  function setPrevPage(currentPage){
    currentPage > 1 ?
      setCurrentPage(currentPage - 1)
    : setCurrentPage(1)
  }

  function setLastPage(currentPage){
    let last = (productData.length + 1)/productPerPage  
    console.log()
    currentPage < last ?
      setCurrentPage(currentPage + 1)
    : setCurrentPage(6) 
  }

  

  // filter 
  const [newData, setNewData] = useState(data.products);

  function getCategory(category){
    const Data = productData.filter((item)=>{
      return item.product == category
    })
    setNewData(Data)
  }

  function getType(type){
    const Data = productData.filter((item)=>{
      return item.type == type
    })
    console.log(Data)
    setNewData(Data)
  }

  function getPrice(price){
    var Data;
    (price == "below $50" ?
    Data = productData.filter((item)=>{
      return item.price < 50
      
    })
    : price == "above $50" ?
    Data = productData.filter((item)=>{
      return item.price > 50
    })
    : price == "below $100" ?
    Data = productData.filter((item)=>{
      return item.price < 100
    })
    : price == "above $100" ?
    Data = productData.filter((item)=>{
      return item.price > 100
    })
    :<></>)
    setNewData(Data)
  }


    return (
      <div>
        <Header1/>
        <Header2/>
        <div className="my-4 flex container mx-auto group">
          <div className="mx-4">
          <button onClick={()=>setFilter(!Filter)} className="border-2 rounded-md px-4 py-1 border-black hover:text-amber-600 font-bold hover:border-amber-600">FILTER</button>
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-2 mx-4 text-center ${Filter ? "flex" : "hidden"}`}>
            <button className="px-4 border">PRICE<select onChange={(e)=>getPrice(e.target.value)} id="price" className="mx-2">
              <option>Choose</option>
              <option>below $50</option>
              <option>below $100</option>
              <option>above $50</option>
              <option>above $100</option>
              </select></button>

              <button className="px-4 border">CATEGORY<select id="price" className="mx-2" onChange={(e)=>getCategory(e.target.value)}>
              <option>Choose</option>
              <option>
                Footwear</option>
              <option >Accessories</option>
              <option>Clothing</option>
              </select></button>

              <button className="px-4 border">TYPE<select onChange={(e)=>getType(e.target.value)} id="price" className="mx-2">
              <option></option>
              <option>men</option>
              <option>women</option>
              </select></button>
          </div>
        </div>

        <div className="container mx-auto my-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
      {newData.map((item, i)=>(
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
      ))}
        </div>

        <div className="text-center my-8 border">
          <p className="text-4xl font-bold my-6 py-4">EXPLORE MORE</p>
      <div className="container mx-auto my-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
      {pagData.map((item, i)=>(
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
      ))}
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="px-2" onClick={()=>setPrevPage(currentPage)}><i class="las la-caret-square-left text-4xl"></i></button>
        <p className="font-bold">
          {currentPage}...of {(productData.length + 1)/productPerPage}
        </p>
        <button className="px-2" onClick={()=>setLastPage(currentPage)}><i class="las la-caret-square-right text-4xl"></i></button>
      </div>
        </div>

      <Footer/>
      </div>


    )
}