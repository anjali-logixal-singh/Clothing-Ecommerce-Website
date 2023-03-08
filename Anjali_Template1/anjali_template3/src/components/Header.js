import React from 'react';
import Bootstrap from 'bootstrap';

export default function Header(props){
  const {header1, header2} = props.data;

    return <div className='Header'>
      {/* first-half navbar */}
      <nav class="first-half navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
              <ul class="navbar-nav first-nav">
                {header1.map((item, i)=>(
                  i == 0 ?
                  <li class="nav-item">
                    <h6 class="nav-link">{item.text}</h6>
                  </li> : ''
                ))}               

              <div class="d-flex align-items-baseline top"> 
                {header1.map((item, i) => (
                    item.dropdownIcon? 
                     <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        {item.text}
                      </a>
                      <div class="dropdown-menu">
                      {item.dropdown.map((item, i)=>(
                          <a class="dropdown-item" href="#"><i class={item.icon}></i>{item.text}</a>
                          ))} 
                        </div>
                      </li>
                    :item.dropdown?
                     <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        {item.text}</a>
                      <div class="dropdown-menu">
                        {item.dropdown.map((item, i)=>(
                            <a class="dropdown-item" href="#">{item}</a>
                          ))}   
                      </div>
                    </li>
                    :<></>
                  ))
                }  

              </div>
              </ul>
        </div>
      </nav>

      {/* second-half navbar  */}
    <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container d-flex align-items-baseline">
              {header2.map((item, i)=>(
                i==0 ? 
                <h5 class="font-weight-bold pr-5">{item.text1}<span class="text-danger">{item.text2}</span></h5>
                : item.icon ? 
                <div class="d-flex">
                <a class="nav-link  mr-auto text-dark pr-2" href="#"><i class={item.icon}></i></a>
                </div>
                :
                <div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto text-dark font-weight-bold pr-5">
                        {item.text == "HOME" ?
                        <li class="nav-item active">
                        <a class="nav-link" href="#">{item.text}<span class="sr-only">(current)</span></a>
                        </li>
                        : <li class="nav-item">
                        <a class="nav-link" href="#">{item.text}</a>
                        </li>}
                    </ul>
                </div>
                
              ))}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
    </nav>

    </div>       

}