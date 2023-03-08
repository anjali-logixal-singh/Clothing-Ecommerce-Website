import React from "react";

export default function Footer(props){
    const {footer} = props.data;

    return <div className="Footer">
        {/* <!-- footer --> */}
        <div class="footer footer1">
            <div class="container">
                <div class="row my-5 p-3">
                    <div class="col-lg-6 col-md-6 col-sm-12 d-inline align-items-baseline">
                        <h3>Newsletter</h3>
                        <p class="font-weight-bold text-secondary">Subscribe to our newsletter and get 20% off your first purchase</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 d-inline">
                        <input type="email" placeholder="Your email" class="bg-light text-secondary border-0 mb-2 px-5 p-2"/>
                        <button type="submit" class="bg-danger text-light border-0 p-2 px-5">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer footer2 container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 ">
                    <p class="text-secondary mr-3 d-inline">Blog</p>
                    <p class="text-secondary mr-3 d-inline">FAQs</p>
                    <p class="text-secondary mr-3 d-inline">Contact us</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 text-right">
                    <i class="f-icons fab fa-facebook-f pr-5"></i>
                    <i class="f-icons fab fa-twitter pr-5"></i>
                    <i class="f-icons fab fa-instagram pr-5"></i>
                    <i class="f-icons fab fa-skype pr-5"></i>
                    <i class="f-icons fab fa-pinterest"></i>
                </div>
            </div>
        </div>

        <div class="footer footer3 container py-3 text-center">
            <div class=" d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <p class="text-secondary pr-5">©2018 All Rights Reserverd. Made with <i class="far fa-heart text-danger"></i>  by <span class="text-danger"> Colorlib </span> & distributed by <span class="text-danger">ThemeWagon</span></p>
                </div>
            </div>
        </div>

    </div>

}