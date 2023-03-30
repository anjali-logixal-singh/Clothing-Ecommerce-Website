import React, { useState } from "react";
import data from "../data.json";
import { Link, useParams } from "react-router-dom";
import Header2 from "../components/Header2";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

export default function ProductDetails(){
  const product = data.products;
    const { id } = useParams();
    const [img, setImg] = useState(product[id - 1].img2);


    function rate(rating) {
        const total = [1, 2, 3, 4, 5];
        return (
            total.map((item, i)=>(
            i < rating ?
            <i class="las la-star text-xl text-amber-500"></i>
            :item > rating ?
            <i class="lar la-star text-xl text-amber-500"></i>
            :<></>
      
          ))) 
        
      }

    
      
    return(
        <div>
            <Header1/>
           <div className="container mx-auto">
            <div className="border-b-2">
            <Header2/>
            </div>
            <div className="text-start mx-4 my-4">
                <a className="font-bold"><Link to=""><i class="las la-home text-xl hover:"></i>Home</Link></a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
            {product.map((item, i)=>(
                (item.id == id ?
                <div className="mx-4" onLoadedDataCapture={()=>setImg(item.img2)}>
                    <img
                src={img}
                className="w-full lg:w-96 lg:mx-4 min-h-min px-2 md:px-1 lg:px-0 py-2"
              />
              <div className="flex justify-between">
              <a onClick={()=>setImg(item.img1)}><img src={item.img1} className="w-36 border"/></a>
              <a onClick={()=>setImg(item.img2)}><img src={item.img2} className="w-36 border"/></a>
              <a onClick={()=>setImg(item.img1)}><img src={item.img1} className="w-36 border"/></a>
    
              <img/>
              </div>
                    </div>
              :<></>
              )))}
                </div>
                <div className="text-left">
                {product.map((item, i)=>(
                item.id == id ?
                    <div>
                        <p className="text-2xl lg:text-5xl my-4">{item.name}</p>
                        <a className="my-4">{rate(item.rating)}</a>
                        <p className="font-bold text-gray-500 text-2xl my-4">${item.price}<del className="px-2 text-red-500 font-light">${item.prevPrice}</del></p>
                        <p className="font-medium text-gray-500 my-4">Description-</p>
                        <p className="italic text-gray-500 my-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
                        <p className="my-4">Select Your Size: <select className="px-8 mx-4 border-2">
                            <option>28</option>
                            <option>30</option>
                            <option>32</option>
                            <option>36</option>
                            <option>38</option>
                            </select></p>
                            <div className="grid grid-cols-2 my-4">
                                <div>
                        <button className="hover:bg-amber-600 text-amber-600 hover:text-white bg-white border border-amber-600 px-6 py-2 font-bold"><i class="las la-cart-plus text-xl px-1"></i>ADD TO CART</button>
                                </div>
    
                                <div>
                        <button className="hover:bg-amber-600 text-amber-600 hover:text-white bg-white border border-amber-600 px-6 py-2 font-bold"><i class="lar la-heart text-xl px-1"></i>WISHLIST</button>
                                </div>
    
                            </div>
                    </div>
              :<></>
            ))}
                </div>
            </div>
            </div>
            
            <div className="my-12">
                <p className="font-bold text-4xl my-4">YOU MAY ALSO LIKE</p>

            <div className="grid grid-cols-4 gap-2">
                {product.map((item, i)=>(
            i > 6 && i < 11 ? 
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
                :<></>
                ))}
            </div>
            </div>

            <Footer/>
        </div>

    )
}