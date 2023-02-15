//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter=0;
setInterval (()=> {
counter ++;
const four = Math.floor(counter/1000);
const three = Math.floor(counter/100);
const two = Math.floor(counter/10);
const one = Math.floor(counter);
    
ReactDOM.render(
     <Home 
       dig4 = {four}
       dig3 = {three}
       dig2 = {two}
       dig1 = {one}
     />, document.querySelector('#app')
     
);

}, 1000);

