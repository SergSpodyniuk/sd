"use strict";
function recursiveOddSumTo(number) {
    let a = 0;
        if (number%2 === 0){
        number -= 1;
     }
while (number >= 1){

     a+=number
   number-=2;

}
return a;
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

function iterativeOddSumTo(number) {
    let a =0;
for (let b =1;b<=number;b+=2){
    a+=b
}
    return a;

};

    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(10)) // 25