import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
//import data from "./data/recipes.json";
//import Rand from "./components/random";

function App() {

var min = 0;
var max = 10;
   

var list = [];

for(var i = 0; i < 10 ; i++){
var rand =  min + (Math.random() * (max-min));
list[i] = Math.floor(rand);

}; 

  return (
  
      <ul className="rand_list">
            {list.map((random, i) => (
                <li id={i}>{random}</li>
            ))}
        </ul>

  );
}

export default App;
