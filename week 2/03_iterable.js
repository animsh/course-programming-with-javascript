// array
let veggies = ["onion", "potato", "tomato"];

console.log("Veggies count:", veggies.length);

console.log("1st veggie: ", veggies[0]);
console.log("2nd veggie: ", veggies[1]);

for (let i = 0; i < veggies.length; i++) {
  console.log(i, veggies[i]);
}

// string

let veggie1 = veggies[0];
for (let i = 0; i < veggie1.length; i++) {
  console.log("Char", i, ":", veggie1[i]);
}
