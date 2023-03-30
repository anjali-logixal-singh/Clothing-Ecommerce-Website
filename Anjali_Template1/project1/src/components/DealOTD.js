import React from "react";

export default function DealOTD() {
  return (
    <div className="bg-black">
      <div className="relative bg-gray-100 lg:bg-white my-4">
        <img src="/img/bg-1.jpg" className="hidden h-full md:hidden lg:block" />
        <div className="lg:absolute inset-x-0 top-0">
          <p className="text-amber-500 pt-4 pb-1">LIMITED QUANTITIES.</p>
          <p className="text-2xl font-bold py-1">DEAL OF THE DAY</p>
          <div className="flex justify-center	">
            <div className="py-2">
              <a href="">
                <img src="/img/product-1.jpg" className="inline" />
              </a>
              <br />
              <a href="" className="hover:text-amber-500">
                Elasticated cotton shorts
              </a>
              <p className="text-gray-300">
                <span className="text-red-600">Now $24.99</span> Was $30.99
              </p>
              <button className="my-2 px-6 py-1 hover:text-white border-b border-black hover:bg-black">
                SHOP NOW
              </button>
            </div>
            <div className="px-2">
              <a href="">
                <img src="/img/product-2.jpg" className="inline" />
              </a>
              <br />
              <a href="" className="hover:text-amber-500">
                Elasticated cotton shorts
              </a>
              <p className="text-gray-300">
                <span className="text-red-600">Now $24.99</span> Was $30.99
              </p>
              <button className="my-2 px-6 py-1 hover:text-white border-b border-black hover:bg-black">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="bg-black py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center py-4">
              <i class="las la-truck-moving text-4xl text-amber-600"></i>
              <p className="text-white text-xl font-bold">Payment & Delivery</p>
              <p className="text-gray-500">Free shipping for orders over $50</p>
            </div>
            <div className="text-center py-4">
              <i class="las la-undo-alt text-4xl text-amber-600"></i>
              <p className="text-white text-xl font-bold">Return & Refund</p>
              <p className="text-gray-500">Free 100% money back guarantee</p>
            </div>
            <div className="text-center py-4">
              <i class="las la-lock text-4xl text-amber-600"></i>{" "}
              <p className="text-white text-xl font-bold">Secure Payment</p>
              <p className="text-gray-500">100% secure payment</p>
            </div>
            <div className="text-center py-4">
              <i class="las la-headset text-4xl text-amber-600"></i>{" "}
              <p className="text-white text-xl font-bold">Quality Support</p>
              <p className="text-gray-500">Alway online feedback 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
