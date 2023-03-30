import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

export default function Login() {
  const [display, setDisplay] = useState(false);
  var [emailVal, setEmailVal] = useState("");
  var [name, setname] = useState("");
  var [username, setusername] = useState("");
  var [cPasswordVal, setCPasswordVal] = useState("");
  var [passwordVal, setPasswordVal] = useState("");

  var [errorEmail, setErrorEmail] = useState("");
  var [errorPassword, setErrorPassword] = useState("");
  var [errorName, setErrorName] = useState("");
  var [errorUsername, setErrorUsername] = useState("");
  var [errorCPassword, setErrorCPassword] = useState("");


  function Validate(email, password) {
      email == "" || email == null
      ? setErrorEmail("Email is required!!")
      : setErrorEmail("") ? <></>
      : password == "" || password == null
      ? setErrorPassword("Password is required!!")
      : setErrorPassword("");
  }

  function ValidateRegister(name, username, email, password, cpassword) {
    return (
      name == "" ? 
      setErrorName("Name is required!!")
      : name.length < 5 || name.length > 20 ?
      setErrorName("Name must be min 5 and max 20 Characters!!")
      : setErrorName("") ? <></>

      : username == "" || username == null ?
      setErrorUsername("Username is required!!")
      : username.length < 5 || username.length > 20 ?
      setErrorUsername("Username must be min 5 and max 20 Characters!!")
      : setErrorUsername("") ? <></>

      : email == "" || email == null
      ? setErrorEmail("Email is required!!")
      : email.length > 20 || email.length < 5
      ? setErrorEmail("Email should be between 5 to 20 characters!!")
      : !email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
      ? setErrorEmail("Email Pattern is not correct!!")
      : setErrorEmail("") ? <></> 

      :password == ""
      ? setErrorPassword("Password is required!!")
      : password.length > 15 || password.length < 8
      ? setErrorPassword("Password should be between 8 to 15 characters!!")
      : setErrorPassword("") ? <></>

      :cpassword == ""
      ? setErrorCPassword("Confirm Password is required!!")
      : cpassword != password 
      ? setErrorCPassword("Confirm Password doesn't matches Password!!")
      : setErrorCPassword("") ? <></> : <></>
  )}

  return (
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class={`w-full max-w-md space-y-8`}>
        <div className="grid grid-cols-2">
          <div>
            <button className={`text-4xl font-bold hover:text-amber-600 border-b-2 py-3 px-8 ${!display ? "text-amber-600 border-amber-600" : "text-black"}`} onClick={()=>setDisplay(false)}>SIGN IN</button>
          </div>
          <div>
            <button className={`text-4xl font-bold hover:text-amber-600 border-b-2 py-3 px-8 ${display ? "text-amber-600 border-amber-600" : "text-black"}`} onClick={()=>setDisplay(true)}>REGISTER</button>
          </div>
        </div>

        <div className={`${display ? "hidden" : "block"}`}>
        
        <div>
          <h1 className="text-5xl font-bold hover:scale-125 duration-1000">
            LOGIXAL
          </h1>
          <p class="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form class="mt-8 space-y-6" action="#">
          <div class=" rounded-md shadow-sm my-4">
            <div className="my-6 text-start">
              <label className="text-gray-600">
                Username or Email Address*
              </label>
              <input
                type="text"
                onChange={(event) => setEmailVal(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Email address"
              />
              <p className="font-medium text-red-700">{errorEmail}</p>
            </div>
            <div className="my-6 text-start">
              <label className="text-gray-600">Password*</label>
              <input
                type="text"
                onChange={(event) => setPasswordVal(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Password"
              />
              <p className="font-medium text-red-700">{errorPassword}</p>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label for="remember-me" class="ml-2 block text-gray-600">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-amber-400 hover:text-amber-600"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              onClick={() => Validate(emailVal, passwordVal)}
              class="group relative flex w-full justify-center bg-white border-2 py-2 px-3 text-sm font-bold text-amber-500 hover:bg-amber-500 hover:text-white rounded-full border-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>

          <hr className="w-full h-full border text-gray-700" />
          <div className="text-center">
            <p className="text-gray-600">or sign in with</p>
            <div className="grid grid-cols-2 gap-2 my-4">
              <div className="flex justify-center	items-center hover:bg-gray-100 border-gray-300 border font-light">
                <i class="lab la-google-plus-g text-3xl text-red-600 mx-2"></i>
                <button className="" href="https://www.gmail.com/">
                  {" "}
                  Login With Google
                </button>
              </div>
              <div className="flex justify-center	items-center hover:bg-gray-100 border-gray-300 border font-light">
                <i class="lab la-facebook-f text-2xl text-blue-600 mx-2"></i>
                <button className="" href="https://www.gmail.com/">
                  {" "}
                  Login With Facebook
                </button>
              </div>
            </div>
          </div>
        </form>
        </div>

        <div className={`${!display ? "hidden" : "block duration-700"}`}>
        <div>
          <h1 className="text-5xl font-bold hover:scale-125 duration-1000">
            LOGIXAL
          </h1>
          <p class="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form class="mt-8 space-y-6" action="#">
          <div class=" rounded-md shadow-sm my-4">
            <div className="my-6 text-start">
              <label className="text-gray-600">
                Name*
              </label>
              <input
                type="text"
                onChange={(event) => setname(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Name"
              />
              <p className="font-medium text-red-700">{errorName}</p>
            </div>
            <div className="my-6 text-start">
              <label className="text-gray-600">
                Username*
              </label>
              <input
                type="text"
                onChange={(event) => setusername(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Username"
              />
              <p className="font-medium text-red-700">{errorUsername}</p>
            </div>
            <div className="my-6 text-start">
              <label className="text-gray-600">
                Email Address*
              </label>
              <input
                type="text"
                onChange={(event) => setEmailVal(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Email address"
              />
              <p className="font-medium text-red-700">{errorEmail}</p>
            </div>
            <div className="my-6 text-start">
              <label className="text-gray-600">Password*</label>
              <input
                type="text"
                onChange={(event) => setPasswordVal(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Password"
              />
              <p className="font-medium text-red-700">{errorPassword}</p>
            </div>
            <div className="my-6 text-start">
              <label className="text-gray-600">Confirm Password*</label>
              <input
                type="text"
                onChange={(event) => setCPasswordVal(event.target.value)}
                class="relative block w-full py-2.5 focus:outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 px-4"
                placeholder="Confirm Password"
              />
              <p className="font-medium text-red-700">{errorCPassword}</p>

            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label for="remember-me" class="ml-2 block text-gray-600">
                I agree to the Privacy Policy
              </label>
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              onClick={() => ValidateRegister(name, username, emailVal, passwordVal, cPasswordVal)}
              class="group relative flex w-full justify-center bg-white border-2 py-2 px-3 text-sm font-bold text-amber-500 hover:bg-amber-500 hover:text-white rounded-full border-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>

          <hr className="w-full h-full border text-gray-700" />
          <div className="text-center">
            <p className="text-gray-600">or sign up with</p>
            <div className="grid grid-cols-2 gap-2 my-4">
              <div className="flex justify-center	items-center hover:bg-gray-100 border-gray-300 border font-light">
                <i class="lab la-google-plus-g text-3xl text-red-600 mx-2"></i>
                <button className="" href="https://www.gmail.com/">
                  {" "}
                  Login With Google
                </button>
              </div>
              <div className="flex justify-center	items-center hover:bg-gray-100 border-gray-300 border font-light">
                <i class="lab la-facebook-f text-2xl text-blue-600 mx-2"></i>
                <button className="" href="https://www.gmail.com/">
                  {" "}
                  Login With Facebook
                </button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>

    </div>
  );
}

{/* <div className="flex justify-between items-center">
          <div className="group">
            <button className="font-bold border border-amber-500 px-2 rounded-md hover:bg-amber-600 hover:text-white">
              <i class="las la-home text-xl text-amber-600 mx-1 group-hover:text-white"></i><Link to="/">HOME</Link>
            </button>
          </div>
          <div>
            <button className="font-bold hover:bg-amber-600 hover:text-white border border-amber-500 px-2 rounded-md "
            >
              SIGN UP
            </button>
          </div>
        </div> */}

