import React from "react";
import Header1 from "../components/Header1";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import Brands from "../components/Brands";
import NewArrivals from "../components/NewArrivals";
import DealOTD from "../components/DealOTD";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Slide from "../components/Slide";
import { useState } from "react";
import OnPageLoad from "../components/OnPageLoad";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

export default function Home() {
  var [popup, setPopup] = useState(false);

  return (
    <div>
    <div className={`${popup ? "blur" : "blur-none"}`} OnPageLoad={()=>setPopup(true)}>
      <Header1 />
      <Header2 />
      <Header3 />
      <Slide />
      <Banner />
      <Trending />
      <DealOTD />
      <NewArrivals />
      <Brands />
      <SubscribeNewsletter />
      <Blog />
      <Footer />
    </div>
      <Link to="ProductDetails"></Link>
      <OnPageLoad popup={setPopup}/>
    </div>
  );
}
