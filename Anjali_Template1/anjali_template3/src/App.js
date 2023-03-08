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
      {text:"My Account", dropdownIcon:true,dropdown:[{text:"Sign In", icon:"fas fa-sign-in-alt pr-2"}, {text:"Register", icon:"fas fa-sign-in-alt pr-2"}] }
    ],
    header2:[
      {text1:"COLO", text2:"SHOP"},
      {text:"HOME"}, {text:"SHOP"},{text:"PROMOTION"},{text:"PAGES"},{text:"BLOG"},{text:"CONTACT"},{icon:"fas fa-search"}, {icon:"fas fa-user"}, {icon:"fas fa-shopping-cart"}
    ],
    slide:{img:"/img/slider_1.jpg", para:"SPRING / SUMMER COLLECTION 2017", }
  

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
