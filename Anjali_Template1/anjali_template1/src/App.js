import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'
import { Carousel } from 'bootstrap';

function App() {
  const data = {
    header:[
      {text:"Home", link:"https://tailwindcss.com/"},
      {text:"Pages", link:"https://tailwindcss.com/"},
      {text:"Product", link:"https://tailwindcss.com/", isDropDown:true, dropdown:["Mens", "Womens", "Kid"]},
      {text:"Blog", link:"https://tailwindcss.com/"},
      {text:"Contact", link:"https://tailwindcss.com/"}, 
      {name:"icon", text:"fas fa-shopping-cart", link:"https://tailwindcss.com/"},
      {name:"icon", text:"fas fa-search", link:"https://tailwindcss.com/"} 

    ],
    slider:[
      {top:"Sale 20% Off On Everything", para:"Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.", buttonTxt:"Shop Now", img:"/img/imggg.jpg"},
      {top:"Sale 50% Off", para:"laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat.", buttonTxt:"Click Now", img:"/img/imggg.jpg"},
      {top:"40% Off On Everything", para:"Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat .", buttonTxt:"Buy Here", img:"/img/imggg.jpg"},
    ],
    shopWithUs:[
      {text: "Come Shop with us now"},
      {top:"Fast Delivery", icon:"fas fa-truck", para:"variations of passages of Lorem Ipsum available"},
      {top:"Free Shipping", icon:"fas fa-receipt", para:"variations of passages of Lorem Ipsum available"},
      {top:"Best Quality", icon:"fas fa-certificate", para:"variations of passages of Lorem Ipsum available"}
    ],
    newArrivals:{
      img:"IMG/girl.webp",
      top:"#New Arrivals", 
      para:"Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa autem similique ex unde!Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!", 
      arrivalsBtn:"Shop now"
    },

    shopItems:[
      "Our Products",
      {img:"/img/img1.png", product:"Dress", price:"$54"},
      {img:"/img/img1.png", product:"Dress", price:"$54"},
      {img:"/img/img1.png", product:"Dress", price:"$54"},
      {img:"/img/img2.png", product:"Shirt", price:"$234"},
      {img:"/img/img2.png", product:"Shirt", price:"$234"},
      {img:"/img/img2.png", product:"Shirt", price:"$234"},
      {img:"/img/img3.png", product:"Frock Dress", price:"$142"},
      {img:"/img/img3.png", product:"Frock Dress", price:"$142"},
      {img:"/img/img3.png", product:"Frock Dress", price:"$142"},
      ], 

      footer:{
        year:"2022",
        name:"ThemeWagon"
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
