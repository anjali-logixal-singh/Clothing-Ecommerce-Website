import React from "react";

export default function Main(props){
    const {slide} = props.data;

    return <div className="Main">
        {/* <!-- slide section --> */}
        <div class="slide  position-relative">
                <img src={slide.img} class="img-fluid"/>
                <div class="slide-content position-absolute">
                    <p class="text-left">{}</p>
                    <h1 class="display-3">Get up to 30% Off New Arrivals</h1>
                    <button class="bg-danger text-white p-3 rounded card border-light mb-3 ">Shop Now</button>
                </div>
        </div>

        {/* <!-- 3 img grid --> */}
        <div class="container">
            <div class="row m-4 text-center">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src="IMG/banner_1.jpg" class="img-fluid position-relative"/>
                    <div class="img-grid position-absolute">
                        <button class="bg-light text-dark card border-light mb-3 px-2 font-weight-bold">WOMEN'S</button>
                    </div>    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 pt-4">
                    <img src="IMG/banner_2.jpg" class="img-fluid position-relative"/>
                    <div class="img-grid position-absolute">
                        <button class="bg-light text-dark card border-light mb-3 px-2 font-weight-bold">ACCESSORIES'S</button>
                    </div>    
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 pt-4">
                    <img src="IMG/banner_3.jpg" class="img-fluid position-relative"/>
                    <div class="img-grid position-absolute">
                        <button class="bg-light text-dark card border-light mb-3 px-2 font-weight-bold">MEN'S</button>
                    </div>    
                </div>
            </div>
        </div>
    
        {/* <!-- New Arrivals --> */}
        <div class="container text-center my-5">
            <h1 class="font-weight-bold">New Arrivals</h1>
            <hr class="hr-red w-15 bg-danger font-weight-bold"/>
        </div>
    
        {/* <!-- 4 buttons --> */}
        <div class="container text-center mb-4">
            <button class="button-four text-dark border mb-2 px-5 py-3 font-weight-bold">ALL</button>
            <button class="button-four text-dark border mb-2 px-5 py-3 font-weight-bold">WOMEN'S</button>
            <button class="button-four text-dark border mb-2 px-5 py-3 font-weight-bold">ACCESSORIES</button>
            <button class="button-four text-dark border mb-2 px-5 py-3 font-weight-bold">MEN'S</button>
        </div>

        {/* <!-- 4 image grid --> */}
        <div class="container">
            <div class="row text-center">
                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_1.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_2.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_3.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_4.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>
            </div>

            <div class="row text-center pt-5">
                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_5.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_6.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_7.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_8.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Best Sellers --> */}
        <div class="container text-center my-5">
            <h1 class="font-weight-bold">Best Sellers</h1>
            <hr class="hr-red w-15 bg-danger font-weight-bold"/>
        </div>

        {/* <!-- 4 image grid --> */}
        <div class="container">
            <div class="row text-center">
                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_1.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_2.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_3.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>

                <div class="grid-4 col-lg-3 col-md-6 col-sm-12 border-right">
                    <img src="IMG/product_4.png"/>
                    <div class="font-weight-bold text-center">
                        <p>Fujifilm X100T 16 MP Digital Camera(Silver)</p>
                        <p><del>$590.00</del><span class="text-danger">$520.00</span></p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!--4 grids  --> */}
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-3 col-md-12 col-sm-12 footer1 px-3 py-1 mt-2">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center">
                            <i class="fas fa-2x fa-truck text-danger"></i>
                        </div>
                        <div class="col-9">
                            <h6>FREE SHIPPING</h6>
                            <p>Suffered Alteration in Some Form</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 footer1 px-3 py-1 mt-2">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center">
                            <i class="far fa-2x text-danger fa-money-bill-alt"></i>
                        </div>
                        <div class="col-9">
                            <h6>CASH ON DELIVERY</h6>
                            <p>The Internet Tend To Repeat</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 footer1 px-3 py-1 mt-2">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center">
                            <i class="fas fa-2x text-danger fa-undo-alt"></i>
                        </div>
                        <div class="col-9">
                            <h6>45 DAYS RETURN</h6>
                            <p>Making it Look Like Readable</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 footer1 px-3 py-1 mt-2">
                    <div class="row">
                        <div class="col-3 d-flex align-items-center">
                            <i class="far fa-2x text-danger fa-clock"></i>
                        </div>
                        <div class="col-9">
                            <h6>45 DAYS RETURN</h6>
                            <p>Making it Look Like Readable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Latest Blogs --> */}
        <div class="container text-center my-5">
            <h1 class="font-weight-bold">Latest Blogs</h1>
            <hr class="hr-red w-15 bg-danger font-weight-bold"/>
        </div>

        {/* <!-- 3 img grid --> */}
        <div class="container">
            <div class="row align-items-baseline text-center">
                <div class="col-lg-4 col-md-4 col-sm-12 mb-2">
                    <img src="IMG/blog_1.jpg" class="img-fluid"/>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 mb-2" >
                    <img src="IMG/blog_2.jpg"  class="img-fluid"/>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 mb-2">
                    <img src="IMG/blog_3.jpg"  class="img-fluid"/>
                </div>
            </div>
        </div>
        
    </div>
}