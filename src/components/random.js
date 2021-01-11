import React from "react";

export default function random(){

var list_of_random = [];

var min = 1;
var max = 100;
   

for(var i = 0; i < 10 ; i++){

var rand =  min + (Math.random() * (max-min));

list_of_random[i] = Math.floor(rand);

}

return (

list_of_random

)

}

