// Accessing object properties one
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(a) {
  return a.country;
}

let obj1 = myFunction({ continent: "Asia", country: "Japan" });
console.log(obj1);

let obj2 = myFunction({ country: "Sweden", continent: "Europe" });
console.log(obj2);

let obj3 = myFunction({
  continent: "Asia",
  country: "Bangladesh",
  capital: "Dhaka",
});

console.log(obj3);
