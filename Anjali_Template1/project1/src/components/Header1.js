import react, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function Header1(props) {
  const header1 = data.navbar.Header1;

  return (
    // <!-- Header 1 -->
    <div class="container mx-auto py-2 flex justify-between border-b-2 px-2">
      {header1.map((item, i) =>
        item.isNumber ? (
          <div class="invisible lg:visible">
            <a href="" class="text-neutral-500 font-light hover:text-amber-600">
              <i class={item.icon}></i>
              <span class="px-2">{item.text}</span>
            </a>
          </div>
        ) : (
          ""
        )
      )}

      <div class="flex">
        {header1.map((item, i) =>
          item.isLogin ? (
            <div>
              <a
                href=""
                class="text-neutral-500 font-light hover:text-amber-600 mx-4"
              ><Link to={"Login"}>
              <i class={item.icon}></i>
                <span class="px-1">{item.text}</span>
              </Link>
                
              </a>
            </div>
          ) : item.isIcons ? (
            <div class="div mx-4  hidden md:contents lg:contents">
              {item.icons.map((item, i) => (
                <a
                  href={item.link}
                  class="text-neutral-500 font-light hover:text-amber-600 px-1"
                >
                  <i class={item.icon}></i>
                </a>
              ))}
            </div>
          ) : (
            ""
          )
        )}

        <ul className="lg:flex hidden">
          {header1.map(
            (item, i) =>
              item.dropdown &&
              item.dropdown.map((item, i) => (
                <li href="">
                  <div className="group">
                    <button className="text-neutral-500 font-light hover:text-amber-600 px-2">
                      {item.text}
                      <i class="las la-angle-down text-sm px-3"></i>
                    </button>
                    <div
                      className={`absolute z-[999] px-3 border-2 left bg-white hidden group-hover:block
              `}
                    >
                      <div className="submenu text-start">
                        <ul className="Shop py-2 block ">
                          {item.dropdownOpt.map((item, i) => (
                            <li className="hover:text-amber-600" href="">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))
          )}
        </ul>
      </div>
    </div>
  );
}
