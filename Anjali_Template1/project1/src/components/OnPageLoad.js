import React, { useState } from "react";

export default function OnPageLoad({popup
}) {
  var [closeBtn, setCloseBtn] = useState(false);

  if (!popup) return null;

  else

    return (
      <div className={`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 OnPageLoad popup fixed hidden lg:block md:block`}>
        <div
          className={`content grid md:grid-cols-2 lg:grid-cols-2 drop-shadow-xl bg-gray-100  ${
            closeBtn ? "hidden" : "visible"
          }`}
        >
          <div className="content-center grid justify-items-center mx-4 px-10 bg-gray-100">
            <div>
            <div>

            <p className="text-2xl font-bold py-4 text-gray-300">LOGIXAL</p>
            <p className="text-4xl font-bold">
              GET <span className="text-amber-600">25%</span> OFF
            </p>
            <p className="text-gray-400 my-1">
              Subscribe to the Molla eCommerce newsletter to receive timely
              updates from your favorite products.
            </p>
            <div className="flex py-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-gray-200 px-10 py-2 focus:outline-none"
              ></input>
              <button class="text-white bg-black font-bold px-3 hover:bg-amber-600">
                GO
              </button>
            </div>
            
            </div>

          
            </div>
            
            <div className="flex">
              <input type="checkbox" className="text-black bg-white" />
              <p className="px-2 text-gray-500">Do not show this popup again</p>
            </div>
          </div>
          <div className="relative hidden md:block lg:block">
            <a href="">
              <img src="/img/img-1.jpg" className="w-full" href="" />
            </a>
            <div className="absolute top-2 right-2">
              <button
                className="bg-gray-300 rounded-full p-1 opacity-50 hover:opacity-100"
                onClick={() => setCloseBtn(!closeBtn)}
                >
                <i class="text-2xl las la-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    );
}
