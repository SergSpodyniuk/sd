"use strict";
//1
function recursiveOddSumTo(number) {
    if (number <= 0) {
        return 0;
    }
    if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    }
    return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
//2
function iterativeOddSumTo(number) {
    let a =0;
for (let b =1;b<=number;b+=2){
    a+=b
}
    return a;

};

    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(10)) // 25