import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home";
import OnPageLoad from "./components/OnPageLoad"
import ReactDOM from 'react-dom/client';
import AddToCart from "./Pages/AddToCart";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import data from "./data.json";

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="AddToCart" element={<AddToCart/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="ProductList" element={<ProductList/>}/>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>} exact/>
      </Routes>
      </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;
