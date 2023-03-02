import React from "react";   
import Dropdown from 'react-bootstrap/Dropdown';
         

export default function Header(props){

    const {header} = props.data;

    console.log(header);


    return <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
      <img class="logo" src="IMG/logo.png"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto font-weight-bold">
          {header.map((item, i) => (
            i == 0 ?  <li class="nav-item active"><a class="nav-link" href={item.link}>{item.text}<span class="sr-only">(current)</span></a>
          </li> : item.name == "icon" ? <li class="nav-item">
            <a class="nav-link" href="#"><i class={item.text}></i></a> </li> 
          : item.isDropDown == true ? <li class="nav-item"><Dropdown class="nav-link">
            <Dropdown.Toggle variant="light" id="dropdown">
            {item.text}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {item.dropdown.map((item, i)=>(
            <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
            ))}  
          </Dropdown.Menu>
          </Dropdown>
          </li>
          :<li class="nav-item"><a class="nav-link" href={item.link}>{item.text}</a></li>          
          ))}

        </ul>

{/* : item.includes("dropdown") ? <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href={item.link} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {item.text}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {item.dropdown.map((item, i) => (
                <a class="dropdown-item" href="#">item</a>
              ))}
            </div></li> : */}
        {/* <ul class="navbar-nav ml-auto font-weight-bold">
          <li class="nav-item active">
            <a class="nav-link" href={header[0].link}>{header[0].text}<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Womens</a>
              <a class="dropdown-item" href="#">Mens</a>
              <a class="dropdown-item" href="#">Kids</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-search"></i></a> 
            
          </li> 
        </ul> */}

        
      </div>
    </div>
    </nav>
}