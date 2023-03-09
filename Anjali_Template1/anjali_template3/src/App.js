import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const data = {
    header1:[
      {text:"FREE SHIPPING ON ALL U.S ORDERS OVER $50"},
      {text:"USD", dropdown:true, dropdown:["USD","CAD", "AUD", "EUR", "GBP"]},
      {text:"English", dropdown: true, dropdown:["French", "Italian", "German", "Spanish"]},
      {text:"My Account", dropdownIcon:true,dropdown:[{text:"Sign In", icon:"fas fa-sign-in-alt pr-2"}, {text:"Register", icon:"fas fa-user-plus pr-2"}] }
    ],
    header2:[
      {text1:"COLO", text2:"SHOP"},
      {text:"HOME"}, {text:"SHOP"},{text:"PROMOTION"},{text:"PAGES"},{text:"BLOG"},{text:"CONTACT"},{icon:"fas fa-search"}, {icon:"fas fa-user"}, {icon:"fas fa-shopping-cart"}
    ],
    slide:{img:"/img/slider_1.jpg", para:"SPRING / SUMMER COLLECTION 2017", h1:"Get up to 30% Off New Arrivals", btnText:"Shop Now"},
    grid3:[{img:"/img/banner_1.jpg", btn:"WOMEN'S"},{img:"/img/banner_2.jpg", btn:"ACCESSORIES'S"},{img:"/img/banner_3.jpg", btn:"MEN'S"}],
    product8:{
      head:"New Arrivals",
      button:["ALL", "WOMEN'S", "ACCESSORIES", "MEN'S"],
      item8: [
        {img:"/img/product_1.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_2.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_3.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_4.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_5.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_6.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_7.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_8.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"}
      ]
    },
    product4:{
      head:"Best Sellers",
      item4:[
        {img:"/img/product_9.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_10.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_9.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
        {img:"/img/product_10.png", prod:"Fujifilm X100T 16 MP Digital Camera(Silver)", prev:"$590.00", current:"$520.00"},
      ]
    },
    grid4:[
      {icon:"fas fa-2x fa-truck text-danger", para:"Suffered Alteration in Some Form", head:"FREE SHIPPING"},
      {icon:"far fa-2x text-danger fa-money-bill-alt", para:"The Internet Tend To Repeat", head:"CASH ON DELIVERY"},
      {icon:"fas fa-2x text-danger fa-undo-alt", para:"Making it Look Like Readable", head:"45 DAYS RETURN"},
      {icon:"far fa-2x text-danger fa-clock", para:"Making it Look Like Readable", head:"45 DAYS RETURN"}
    ],
    img3:{
      head:"Latest Blogs",
      imgs:["/img/blog_1.jpg", "/img/blog_2.jpg", "/img/blog_3.jpg"]
    },
    footer:{
      title:["Blog", "FAQs", "Contact Us"],
      icons:["f-icons fab fa-facebook-f pr-5", "f-icons fab fa-twitter pr-5", "f-icons fab fa-instagram pr-5", "f-icons fab fa-skype pr-5", "f-icons fab fa-pinterest"]
    }
  }

  return (
    <div className="App">
     <Header data={data}/>
     <Main data={data}/>
     <Footer data={data}/>
    </div>
  );
}

export default App;
