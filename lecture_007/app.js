//Accessing object properties two

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'

function myFunction(obj) {
  return obj["prop-2"];
}

let obj1 = myFunction({ one: 1, "prop-2": 2 });
console.log(obj1);

let obj2 = myFunction({ "prop-2": "two", prop: "test" });
console.log(obj2);
