import react from "react";
import data from "../data.json";

export default function Banner(props) {
  const slides = data.main.Banner;

  return (
    <div class="container mx-auto my-4">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2">
        {slides.map((item, i) => (
          <div className="relative">
            <img
              src={item.img}
              class=" w-full px-2 md:px-1 lg:p-4 hover:brightness-50"
              href=""
            />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p class="text-white">{item.title}</p>
              <h3 class="text-white text-2xl font-bold">{item.heading}</h3>
              <button class="text-white border-b-2 hover:text-black hover:bg-white px-3 py-2 mt-4">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
