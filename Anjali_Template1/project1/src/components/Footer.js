import React from "react";
import data from "../data.json";

export default function () {
  const footer = data.footer;

  return (
    <div className="Footer bg-black">
      <div className="container mx-auto py-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-start">
          {footer.map((item, i)=>(
            item.isMedia ? 
            <div className="lg:text-left grid px-2 py-2">
            <p className="text-white font-bold">{item.heading}</p>
            <br />
            <p className="text-gray-500">
              {item.para}
            </p>
            <br />
            <div className="text-xl">
              {item.media.map((item, i)=>(
                              <a className="px-2" href={item.link}>
                              <span className="hover:bg-white rounded-full px-2 py-1">
                                <i class={item.icon}></i>
                              </span>
                            </a>
              
              ))}
            </div>
          </div> 
          :!i==0 && !item.isCopyRight? 
          <div className="lg:text-left grid px-2 py-2">
          <p className="text-white font-bold">{item.heading}</p><br/>
          {item.list.map((item)=>(            
            <a className="text-gray-500 hover:text-amber-600">{item}</a>
          ))}
          </div>    
          :<></>
          ))}

           
        


        
          
        </div>

        {footer.map((item, i)=>(
          item.isCopyRight ?
        <div className="text-center">
          <hr className="text-gray-500 my-4" />
          
          <img src={item.pay} className="inline py-2" />
          <h6 className="text-2xl font-bold text-white py-2">{item.logo}</h6>
          <p className="text-gray-500 py-2">
            Copyright ©{item.year} Molla Store. All Rights Reserved.
          </p>
        </div>
        :<></>
            ))}


      </div>
    </div>
  );
}
