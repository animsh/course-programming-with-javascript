// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (let [key, value] of Object.entries(bird)) {
    console.log(key + ": " + value);
  }
}

birdCan();

// Task 3
function animalCan() {
  for (let [key, value] of Object.entries(bird)) {
    console.log(key + ": " + value);
  }
  for (let [key, value] of Object.entries(animal)) {
    console.log(key + ": " + value);
  }
}

animalCan();
