"use strict";
//1
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];
userNames.sort();
userNames.forEach(name => {
    const initial = name.split(' ') 
    .map(part => part[0].toUpperCase()) 
    .join('.'); 
    
    initials.push(initial);
});
console.log(userNames);
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//2
const userNames1 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

const vowels = ["А", "Е", "Є", "І", "Ї", "О", "У", "Ю", "Я"];
let filteredNames = [];
// if construction
userNames1.forEach(name => {
     const firstLetter = name[0];
        vowels.forEach (vowel =>{
    if( firstLetter === vowel){
    
        filteredNames.push(name);
}
})});
// filter
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
filteredNames= userNames1.filter(name => vowels.find(vowel => name[0].includes(vowel)));

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
//3 Виконав за допомогою математики, використання массивів не еффективне
const currentMaxValue = 4589;
let reverseMaxValue = 0;

function reverseNumber(maxValue){
    let numDigits = Math.floor(Math.log10(maxValue)) + 1;
    for (let i = 0; i < numDigits; i++) {
        let currentNumber = Math.trunc(maxValue / (10 ** i)) % 10;
        reverseMaxValue = reverseMaxValue * 10 + currentNumber;
    }
}

reverseNumber(currentMaxValue);
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//4
const resultsArray = [1, 2, [3, [4]]];


function calculateProduct(arr) {
    let product = 1; 
    arr.forEach(item => {
        if (Array.isArray(item)) {
            product *= calculateProduct(item);
        } 
        
        else {

            product *= item;
        }  });
    return product;
}

// Виклик функції для обчислення добутку
let productOfArray = calculateProduct(resultsArray);

console.log(productOfArray);