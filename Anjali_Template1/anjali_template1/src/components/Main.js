import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bootstrap from 'bootstrap';


export default function Main(props){
    
  const {slider, shopWithUs, newArrivals, shopItems} = props.data;
    
    return   <div className="Main">
        {/* Slider */}
        <Carousel>
          {slider.map((item, i) =>(
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={item.img}
                alt={i}
                />
                <Carousel.Caption>
                <h1><span>{item.top}</span></h1>
                        <p>{item.para}</p>
                        <button type="button" class="btn shopnow ">{item.buttonTxt}</button>
                </Carousel.Caption>
            </Carousel.Item>)
          )}
        </Carousel>

        {/* Shop with us */}
        <div class="container text-center shop">
        <h1>{shopWithUs[0].text}</h1>
        <hr/>
        <div class="row">
          {shopWithUs.map((item, i) =>(
            i == 0 ? <></>:
          <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="detail-box">
              <h3>{item.top}</h3>
              <i class={item.icon}></i>
              <p>{item.para}</p>
          </div>
          </div>
          ))}
        </div>
        </div>

        {/* Arrivals */}
        <div class="arrivals">
        <div class="container my-5">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img src={newArrivals.img} class="img-fluid"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-center">
              <h1>{newArrivals.top}</h1>
              <p>{newArrivals.para}</p>
              <button type="button" class="btn shopnow ">{newArrivals.arrivalsBtn}</button>
            </div>
          </div>
        </div>
        </div>

        {/* shop items */}
        <div class="container text-center">
        <h1>Our<span>Products</span></h1>
        <hr class="w-25"/>
          <div class="row mt-5"> 
            {shopItems.map((item, i) =>(
              i == 0 ? <></> :
              <div class="col-lg-4 col-sm-12">
                <div class="parent">
                  <img src={item.img} class="img-fluid"/>
                  <div class="d-flex justify-content-between">
                    <h3>{item.product}</h3>
                  <h3>{item.price}</h3>
                  </div>
                </div> 
              </div>
            ))}
          </div>
        </div>
    </div>
}

