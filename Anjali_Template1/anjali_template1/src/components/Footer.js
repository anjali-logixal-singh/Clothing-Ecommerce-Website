import React from 'react';
import bootstrap from 'bootstrap';

export default function Footer(props){
  const {footer} = props.data;

    return <div class="email-us">
        <div class="container text-center">
        <h2 class="pt-3">Subscribe To Get Discount Offers</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <input type="email" placeholder=" Enter Your Email"/>
      <button type="button" class="btn shopnow ">Subscribe</button>
    </div>
    <div class="footer text-center pt-3 p-2">
    <h6>© {footer.year} All Rights Reserved By<span> Free Html Templates</span></h6>
    <p>Distributed By <span>{footer.name}</span></p>
    </div>
  </div>

} 