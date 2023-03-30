import React from "react";

export default function SubscribeNewsletter() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="relative">
          <a href="">
            <img
              src="/img/banner-3.jpg"
              class="w-full hover:brightness-50"
              href=""
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p class="text-white">LIMITED TIME ONLY</p>
              <h3 class="text-white text-2xl font-bold py-1">
                END OF SEASON
                <br />
                SAVE 50% OFF
              </h3>
              <button class="text-white border-b-2 hover:text-black hover:bg-white px-3 py-2 mt-4">
                SHOP NOW
              </button>
            </div>
          </a>
        </div>

        <div className="content-center grid justify-items-center bg-gray-100 py-8">
          <p className="text-2xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="text-gray-400 my-1">
            Sign up now for{" "}
            <span className="text-amber-500 ">10% discount</span> on first
            order.
            <br /> Customise my news:
          </p>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-black px-10 py-1 my-4 focus:outline-none focus:border-amber-500"
          ></input>
          <br />
          <button class="text-black border-b-2 border-black hover:text-white hover:bg-black px-6 py-2 ">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
