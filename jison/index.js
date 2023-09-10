// https://hacks.mozilla.org/2013/05/compiling-to-javascript-and-debugging-with-source-maps/

const jison = require('./calculator'); // Replace with the actual path to calculator.js

const input = "2 + 3 * (4 - 1) / 2";
const parser = new jison.Parser();
const result = parser.parse(input);

console.log(`Result: ${result}`);
