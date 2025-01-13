"use strict";
//1
let text = "";
for(let i = 1; i<=100;i++){

    if (i%3 === 0 && i%5 === 0 ){
        text+= " LOLKEK"
    }
       else if (i%3 === 0){
        text+= " KEK"
    }        
        else if (i%5 === 0){
            text+= " LOL"

        }
        else{ 
            text+= ` ${i}`}
}
console.log(text);
let text1 = "";
let text2 = "";
//2
const value = 10;
let i = 0;
if (Number.isNaN(value)){

  for (let a =1;a<value;a++){
    if (a%2 === 0){
        text1 += ` ${a}`;
    }

   }
   while (i<value-2){
    i+=2;
    text2 += ` ${i}`;

   }
   console.log(text1);
console.log(text2);
}
else {
    console.log("Таке чуство шо Бог десь наказує нас за шось")
}