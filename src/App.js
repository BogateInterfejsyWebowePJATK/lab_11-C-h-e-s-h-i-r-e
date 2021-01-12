import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./components/buttons";
import data from "./data/jpg.json";
import { useState } from 'react';
import Rating from "./components/rating";

export default function App() {

 const [jpgs, setJpgs] = useState(data.map(i => {
    return {
      ...i
      
    }
  }));
  
 const del = (x) => {
        let n = [...jpgs];
        n.splice(x, 1)
        setJpgs(n)
    }

  return (
<>

<div class="Photos">
        {jpgs.map((data, j) =>
        
        <div key={j} className="all_jpgs">
        	
            <button onClick={() => del(j)}>Usun</button> <br />
            <img src={data.url} height="300px" width="300px" />
            <div>{data.title}</div>
            <div>{data.date}</div>
            <Rating />
        </div>
        
        )}
      </div>

<Buttons p={jpgs} setP={setJpgs}/>

</>
)
}

