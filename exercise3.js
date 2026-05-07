// TEMPLATES LITERALS
const name = "Ibrahim";
const age = 25;
const city = "Fairbon";
const profession = "Student";

// template literal
const profile = `My name is ${name}. I am ${age} years old. My birth year is ${
  2026 - age
}. I live in ${city} and I am a ${profession}.`;

console.log(profile);

//Name in uppercase inside the template
const upper = `${name.toUpperCase()} has joined.`;
console.log(upper);

// Multi-line string using backticks
const multiLine = `Name: ${name}
Age: ${age}
City: ${city}
Profession: ${profession}`;

console.log(multiLine);
