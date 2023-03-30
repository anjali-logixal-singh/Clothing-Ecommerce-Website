import React from "react";

export default function Brands() {
  return (
    <div className="container mx-auto my-2">
      <p className="font-bold text-2xl py-2">SHOP BY BRANDS</p>
      <div className="justify-items-center items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="py-6 px-4">
          <a href="">
            <img src="/img/1.png" />
          </a>
        </div>
        <div className="py-6 px-4 ">
          <a href="">
            <img src="/img/2.png" />
          </a>
        </div>
        <div className="py-6 px-4 ">
          <a href="">
            <img src="/img/3.png" />
          </a>
        </div>
        <div className="py-6 px-4 ">
          <a href="">
            <img src="/img/4.png" />
          </a>
        </div>
        <div className="py-6 px-4 ">
          <a href="">
            <img src="/img/5.png" />
          </a>
        </div>
        <div className="py-6 px-4 ">
          <a href="">
            <img src="/img/6.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
