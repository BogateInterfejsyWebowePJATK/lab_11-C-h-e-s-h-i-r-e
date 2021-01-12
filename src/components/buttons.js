import React from "react";

export default function Buttons({p,setP}) {


function random_in_Array(arr) {
    let arrCopy = [...arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arrCopy.splice(Math.random() * arrCopy.length, 1)[0]);
    }
    return result;
}

 

    return (
    <>
     <button onClick={
        () => {
          p.sort((a, b) => a.title.localeCompare(b.title));
          setP([...p]);
        }
      }>Title</button>

      <button onClick={
        () => {
          p.sort((a,b) => parseInt(a.date) - parseInt(b.date));
          setP([...p]);
        }
      }>Date</button>

      <button onClick={
        () => {
          setP(random_in_Array(p));
        }
      }>Randomize</button>
     </>
    );
}

