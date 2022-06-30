// Write a sum sub mul div function that takes two numbers
// Sum a and b , Sub a and b , Mul a and b , Div a and b
// Return the result

// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// console.log(`Sum is : ${sum(4, 6)}`);
// console.log(`Sub is : ${sub(4, 6)}`);
// console.log(`Mul is : ${mul(4, 6)}`);
// console.log(`Div is : ${div(36, 6)}`);

function sumSubMulDiv(a, b) {
  function sum(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
  return `
  ${a} and ${b} numbers:
  Sum is : ${sum(a, b)}
  Sub is : ${sub(a, b)}
  Mul is : ${mul(a, b)}
  Div is : ${div(a, b)}
  `;
}
let result = sumSubMulDiv(50, 30);

console.log(result);
