import React, { useCallback, useState } from "react";
import data from "../data.json";

export default function Header3() {
  const header3 = data.navbar.Header3; 

  const [open, setOpen] = useState(false);
  const [elements, setElements] = useState(false);

  return (
    <nav className="z-20 mb-2 md:mb-0 lg:mb-0">
      <div className="Header3 bg-black py-2">
        <div className="container mx-auto flex justify-between items-center px-2">
          <div className="hidden lg:flex">
            <ul className="lg:flex">
              {header3.dropdown.map((item, i)=>(
              <li href="" className="mx-3 group relative ">
                <button
                  className="font-bold text-white hover:text-amber-500 hover:border-b border-amber-500 pr-2"
                >
                  {item.text}<i class="las la-angle-down text-sm px-1"></i>
                </button>
                <div
                  className={`top-6 absolute min-w-fit z-[999] grid px-4 border-2 bg-white hidden group-hover:flex ${item.dropdownBtn.length > 1 ?  "" : "grid-col-1"}`}
                >
                  {item.dropdownBtn && item.dropdownBtn.map((item, i)=>(
                    <div className="submenu text-start min-w-fit px-2">
                    <h1 className="font-bold pt-1">{item.head}</h1>
                    <ul className="Shop py-2 block ">
                      {item.list && item.list.map((item, i)=>(
                      <li className="hover:text-amber-600" href="">
                        {item}
                      </li>
                      ))}
                    </ul>
                  </div>
                  ))}
                  </div>
              </li>

              ))}
            </ul>
          </div>
          <div className="" onClick={() => setOpen(!open)}>
            <i class="las la-bars text-4xl font-bold lg:hidden text-white"></i>
          </div>
          <div className="flex text-right items-center">
            <i class="las la-lightbulb text-2xl text-amber-500 px-2"></i>
            <p className="font-bold text-white">CLEARANCE UP TO 30% OFF</p>
          </div>
        </div>

        {/* Mobile Nav */}

        <div className={`lg:hidden py-4 ${open ? "contents	" : "hidden"}`}>
          <div className="inline py-2">
            <i class="las la-search text-2xl text-white"></i>
            <input
              type="search"
              placeholder="Search product..."
              className="border-amber-600 bg-black text-gray-500 px-2 my-4 rounded-full border-2"
            />
          </div>

          <ul className="my-2">
            {header3.dropdown.map((item, i)=>(
            <li href="" class="font-bold text-white hover:text-amber-500 group">
              <button
                className="font-bold text-white hover:text-amber-500 pr-2"
              >
                {item.text}<i class="las la-angle-down text-sm px-1"></i>
              </button>
              <div
                className={`max-h-60 overflow-scroll	 absolute z-[999] border-2 hidden group-hover:contents`}
              >
                <hr classname="text-gray-200" />
                  {item.dropdownBtn.map((item, i)=>(
                <div className="submenu text-center text-white bg-black py-4">
                    <h1 className="font-bold">{item.head}</h1>
                    <ul className="Shop py-2 block ">
                      {item.list.map((item, i)=>(
                    <li className="hover:text-amber-600" href="">
                      {item}
                    </li>
                      ))}
                     </ul>
                </div>
                  ))}

                <hr classname="text-gray-200" />
              </div>
            </li>
              
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}
// 488
