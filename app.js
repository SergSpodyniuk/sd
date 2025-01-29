"use strict";
//1
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

//2
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
    return function(b) {
      return a * b;
    };
  }
//3


const movies = [
    {
      movieName: 'The Thing',
      releaseYear: 1982,
      directedBy: 'Carpenter',
      runningTimeInMinutes: 109,
    },
    {
      movieName: 'Aliens',
      releaseYear: 1986,
      directedBy: 'Cameron',
      runningTimeInMinutes: 137,
    },
    {
      movieName: 'Men in Black',
      releaseYear: 1997,
      directedBy: 'Sonnenfeld',
      runningTimeInMinutes: 98,
    },
    {
      movieName: 'Predator',
      releaseYear: 1987,
      directedBy: 'McTiernan',
      runningTimeInMinutes: 107,
    },
  ];
  const sortedByYear = [...movies].sort(byProperty('releaseYear', '>'));
  console.log(sortedByYear); 
  // Сортування по року випуску
  
  const sortedByTime = [...movies].sort(byProperty('runningTimeInMinutes', '<'));
  console.log(sortedByTime); 
  // Сортування по тривалості фільмів
  
  const sortedByName = [...movies].sort(byProperty('movieName', '>'));
  console.log(sortedByName); 
  // Сортування по назві фільму
  
  function byProperty(property, direction) {
    return function(a, b) {
      if (typeof a[property] === 'number' && typeof b[property] === 'number') {
        return direction === '>' ? a[property] - b[property] : b[property] - a[property];
      }
      if (typeof a[property] === 'string' && typeof b[property] === 'string') {
        return direction === '>' 
          ? a[property].localeCompare(b[property]) 
          : b[property].localeCompare(a[property]);
      }
  
      return 0;
    };
  }
//4
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
  return [...new Set(array)];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена']
