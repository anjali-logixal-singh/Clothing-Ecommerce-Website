import React from "react";

export default function Blog() {
  return (
    <div className="container mx-auto Blog py-4">
      <p className="font-bold text-2xl my-8 ">FROM OUR BLOG</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1 my-6">
        <div>
          <a href="">
            <img src="/img/post-1.jpg" className="px-4 w-full" />
          </a>
          <div className="py-2">
            <a href="" className=" text-gray-300">
              <span className="hover:text-amber-500 hover:underline">
                Nov 22, 2018,
              </span>
              1 Comments
            </a>
            <br />
            <a href="" className="text-gray-600 font-bold hover:text-amber-500">
              SED ADIPISCING ORNARE.
            </a>
            <br />
            <a href="" className=" text-gray-500 hover:text-amber-500">
              READ MORE
            </a>
          </div>
        </div>

        <div>
          <a href="">
            <img src="/img/post-2.jpg" className="px-4 w-full" />
          </a>
          <div className="py-2">
            <a href="" className=" text-gray-300">
              <span className="hover:text-amber-500">Nov 22, 2018,</span>1
              Comments
            </a>
            <br />
            <a href="" className="text-gray-600 font-bold hover:text-amber-500">
              SED ADIPISCING ORNARE.
            </a>
            <br />
            <a href="" className=" text-gray-500 hover:text-amber-500">
              READ MORE
            </a>
          </div>
        </div>

        <div>
          <a href="">
            <img src="/img/post-3.jpg" className="px-4 w-full" />
          </a>
          <div className="py-2">
            <a href="" className=" text-gray-300">
              <span className="hover:text-amber-500">Nov 22, 2018,</span>1
              Comments
            </a>
            <br />
            <a href="" className="text-gray-600 font-bold hover:text-amber-500">
              SED ADIPISCING ORNARE.
            </a>
            <br />
            <a href="" className=" text-gray-500 hover:text-amber-500">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
