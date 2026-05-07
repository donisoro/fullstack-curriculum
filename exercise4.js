console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);

console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log(null == undefined);

// convert string to number
let str = "42";
let xNum = Number(str);
console.log(xNum);
console.log("Type of xNum is:", typeof xNum);

// Convert a Number to String
const num = 100;
let Strg = String(num);
console.log(Strg);
console.log("Type of Strg is:", typeof Strg);

console.log(parseInt("42px")); // Stop a numeric character
console.log(Number("42px")); //  NAN completely fails

console.log(parseInt("3.9")); // 3: drop the decimal
console.log(Number("3.9")); //  Keep the decimal
