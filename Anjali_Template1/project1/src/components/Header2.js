import React, {useState} from "react";
import data from "../data.json"; 
import { Link } from "react-router-dom";

export default function Header2(props) {
  const header2 = data.navbar.Header2;
  const [productData, setProductData] = useState(data.products);
  const [val, setVal] = useState("");

  const searchProduct = (val) => {
    setProductData(productData.filter((item) => {
      return item.type == val || item.product == val || item.name == val
     }))
  }  

  return (
    <div className="container mx-auto Header2 flex justify-between items-center py-4 px-2">
      {header2.map((item, i)=>(
        item.isSearch ? 
      <div className="hidden md:inline lg:inline relative group">
        <input
          type="text"
          placeholder={item.placeholder}
          className="focus:outline-none px-2"
          onChange={(event) => setVal(event.target.value)}
        />
        <button type="submit" onClick={()=>searchProduct(val)} onClickCapture={()=>setProductData(data.products)}className="hover:text-white hover:bg-amber-500"><i class={item.icon}></i></button>
    
        <div className="absolute z-[999] bg-white top-8 left-4 py-2 border hidden group-hover:block">
          {productData.map((item, i)=>(
            i < 4 ? 
            <div className="">
            <div className="flex justify-between">
            <img src={item.img1}className="w-12 mx-2"/>
              <div className="text-left px-2">
                <a className="hover:text-amber-600 font-bold">{item.name}</a>
                <p className="text-gray-500">$${item.price}</p>
              </div>
              <button className="font-bold border hover:text-white hover:bg-amber-500 px-2 my-2 mx-2">Buy</button>
              <div>
              </div>
            </div>
            <hr className="my-2 text-gray-500"/>
            </div>
            :<></>
          ))}

        </div>

      </div>
        : item.isLogo ?
      <div px-2>
        <p className="font-bold text-2xl">{item.text}</p>
      </div>
      : <></>
      ))}

      <div className="flex">
        {header2.map((item, i)=>(
         item.popUps && item.popUps.map((item, i)=>(
          item.isPopUp ? 
          <div className="relative group">
          <a href="" className="hover:text-amber-600 font-bold">
            <i class={item.icon}></i>{item.text}
          </a>
          <div className="absolute z-[999] p-4 top-8 right-2 bg-white group-hover:block hidden border">
            <div className="flex justify-between">
              <div className="text-left">
                <a className="hover:text-amber-600 font-bold">Stripped T-shirt</a>
                <p className="text-gray-500">1 X $80.00</p>
              </div>
              <div>
                <img src="img/product-5-1.jpg" className="w-10"/>
              </div>
              <button className="hover:text-amber-500"><i class="las la-times"></i></button>
            </div>
            <hr className="my-2 text-gray-500"/>
            <div className="flex justify-between">
              <div className="text-left">
                <a className="hover:text-amber-600 font-bold">Stripped T-shirt</a>
                <p className="text-gray-500">1 X $80.00</p>
              </div>
              <div>
                <img src="img/product-5-1.jpg" className="w-10"/>
              </div>
              <button className="hover:text-amber-500"><i class="las la-times"></i></button>
            </div>
            <hr className="my-2 text-gray-500"/>
            <div className="flex justify-between"><p>TOTAL</p><p>$160.00</p></div>
            <div className="flex py-1">
              <button  className="px-6 py-2 mx-1 text-white rounded bg-amber-500 hover:bg-white border hover:text-amber-500 hover:border"><Link to="AddToCart">Cart</Link></button>
              <button className="px-6 py-2 mx-1 text-white rounded bg-amber-500 hover:bg-white hover:text-amber-500 hover:border">Checkout</button>
            </div>
          </div>
        </div>
        : <div>
        <a href="" className="hover:text-amber-600 font-bold">
          <i class={item.icon}></i>{item.text}
        </a>
      </div>
         ))

        ))}
        
        
      </div>
    </div>
  );
}
