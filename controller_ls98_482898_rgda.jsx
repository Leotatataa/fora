const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
grape * 10,25
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

false / 87
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
banana

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
function addNumbers(a, b) { return a + b; }

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const filterEvenNumbers = numbers => numbers.filter(isEven);

const reverseString = str => str.split("").reverse().join("");
const isEven = num => num % 2 === 0;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange


const isPalindrome = str => str === str.split("").reverse().join("");
const getUniqueValues = array => [...new Set(array)];
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false - 5

const fetchData = async url => { const response = await fetch(url); return response.json(); }
98 / true

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

83,54,1,60,10,68,97,14,13,46,66,42,28,20 / false
const isEven = num => num % 2 === 0;

false + 46,76,28,82,5,42,20,93,54,84,8,71,48,73,49,94,1,50,15,68,7,47,7,61,3,87,1,31,36,75,86,24,52,55,95,35,69,68,16,2,32,41,63,17,80,46,39,65,59,25,71,63,11,99,21,46,74,19,78,71,59,91,67,91,50,87,7,70,34,22,10,18,5,24,73,76,22,65,84,75,94,55,22,37,58,54,91
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const isPalindrome = str => str === str.split("").reverse().join("");

const findSmallestNumber = numbers => Math.min(...numbers);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true + 12,32,61,38,82,78,75,46
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
console.log(getRandomString());
const findSmallestNumber = numbers => Math.min(...numbers);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
orange - 56,12,71,28,68,4,7,99,46,81,76,44,22,26,70,78,63,51,56,51,35,90,72,94,78,91,51,39,63,7,26,37,98,69,46,16,9

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
kiwi


console.log(getRandomString());
62 - false

console.log(getRandomString());
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const reverseWords = str => str.split(" ").reverse().join(" ");
class MyClass { constructor() { this.property = getRandomString(); } }
68 / false
const isPalindrome = str => str === str.split("").reverse().join("");
57 / true

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const capitalizeString = str => str.toUpperCase();

const sum = (a, b) => a + b;
