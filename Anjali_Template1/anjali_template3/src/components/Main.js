import React from "react";

export default function Main(props){
    const {slide, grid3, product8, product4, grid4, img3} = props.data;

    return <div className="Main">
        {/* <!-- slide section --> */}
        <div class="slide  position-relative">
                <img src={slide.img} class="img-fluid"/>
                <div class="slide-content position-absolute">
                    <p class="text-left">{slide.para}</p>
                    <h1 class="display-3">{slide.h1}</h1>
                    <button class="bg-danger text-white p-3 rounded card border-light mb-3 ">{slide.btnText}</button>
                </div>
        </div>

        {/* <!-- 3 img grid --> */}
        <div class="container">
            <div class="row m-4 text-center">
                {grid3.map((item, i)=>(
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src={item.img} class="img-fluid position-relative"/>
                    <div class="img-grid position-absolute">
                        <button class="bg-light text-dark card border-light mb-3 px-2 font-weight-bold">{item.btn}</button>
                    </div>    
                </div>
                ))}
            </div>
        </div>
    
        {/* <!-- New Arrivals --> */}
        <div class="container text-center my-5">
                <h1 class="font-weight-bold">{product8.head}</h1>
                <hr class="hr-red w-15 bg-danger font-weight-bold"/>
        </div>

        {/* <!-- 4 buttons --> */}
        <div class="container text-center mb-4">
        {product8.button.map((item, i)=>(
            <button class="button-four text-dark border mb-2 px-5 py-3 font-weight-bold">{item}</button>         
        ))}
        </div>

        {/* <!-- 4 image grid --> */}
        <div class="container">
            <div class="row text-center">
                {product8.item8.map((item, i)=>(
                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src={item.img}/>
                    <div class="font-weight-bold text-center">
                        <p>{item.prod}</p>
                        <p><del>{item.prev}</del><span class="text-danger">{item.current}</span></p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* <!-- Best Sellers --> */}
        <div class="container text-center my-5">
            <h1 class="font-weight-bold">{product4.head}</h1>
            <hr class="hr-red w-15 bg-danger font-weight-bold"/>
        </div>

        {/* <!-- 4 image grid --> */}
        <div class="container">
            <div class="row text-center">
                {product4.item4.map((item, i)=>(
                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src={item.img}/>
                    <div class="font-weight-bold text-center">
                        <p>{item.prod}</p>
                        <p><del>{item.prev}</del><span class="text-danger">{item.current}</span></p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* <!--4 grids  --> */}
        <div class="container my-5">
            <div class="row">
                {grid4.map((item, i)=>(
                <div class="col-lg-3 col-md-12 col-sm-12 footer1 px-3 py-1 mt-2">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center">
                            <i class={item.icon}></i>
                        </div>
                        <div class="col-9">
                            <h6>{item.head}</h6>
                            <p>{item.para}</p>
                        </div>
                    </div>
                </div>
                 ))}
            </div>
        </div>

        {/* <!-- Latest Blogs --> */}
        <div class="container text-center my-5">
            <h1 class="font-weight-bold">{img3.head}</h1>
            <hr class="hr-red w-15 bg-danger font-weight-bold"/>
        </div>

        {/* <!-- 3 img grid --> */}
        <div class="container">
            <div class="row align-items-baseline text-center">
                {img3.imgs.map((item, i)=> (
                <div class="col-lg-4 col-md-4 col-sm-12 mb-2">
                    <img src={item} class="img-fluid"/>
                </div>
                ))}
            </div>
        </div>
        
    </div>
}