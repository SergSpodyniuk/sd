function detonatorTimer(delay) {
  let counter = delay;
  const timer = setInterval(() => {
      if (counter > 0) {
          console.log(counter);
          counter--;
      } else {
          console.log('BOOM!');
          clearInterval(timer);
      }
  }, 1000);
}

detonatorTimer(3);

function detonatorTimer(delay) {
  function countdown(counter) {
      if (counter > 0) {
          console.log(counter);
          setTimeout(() => countdown(counter - 1), 1000);
      } else {
          console.log('BOOM!');
      }
  }
  countdown(delay);
}

detonatorTimer(3);



let car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  color: 'red',
  maxSpeed: 250,
  describeCar() {
      console.log(`This is a ${this.color} ${this.brand} ${this.model} from ${this.year}.`);
  },
  accelerate() {
      console.log(`The ${this.brand} ${this.model} accelerates to its max speed of ${this.maxSpeed} km/h!`);
  },
  repaint(newColor) {
      this.color = newColor;
      console.log(`The car has been repainted to ${this.color}.`);
  }
};

car.describeCar();
car.accelerate();
car.repaint('black');



let car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  color: 'red',
  maxSpeed: 250,
  describeCar() {
      console.log(`This is a ${this.color} ${this.brand} ${this.model} from ${this.year}.`);
  },
  accelerate() {
      console.log(`The ${this.brand} ${this.model} accelerates to its max speed of ${this.maxSpeed} km/h!`);
  },
  repaint(newColor) {
      this.color = newColor;
      console.log(`The car has been repainted to ${this.color}.`);
  }
};

let securedDescribeCar = car.describeCar.bind(car);
let securedAccelerate = car.accelerate.bind(car);
let securedRepaint = car.repaint.bind(car, 'black');

setTimeout(securedDescribeCar, 4000);
setTimeout(securedAccelerate, 5000);
setTimeout(securedRepaint, 6000);



function someFunction(a, b) {
  console.log(`Result: ${a + b}`);
}

function slower(func, seconds) {
  return function(...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds`);
      setTimeout(() => func(...args), seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction(3, 7);
