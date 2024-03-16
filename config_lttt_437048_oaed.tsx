const fetchData = async url => { const response = await fetch(url); return response.json(); }

banana * banana

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

kiwi / false
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
7,83,52,38,98,1,77,84,79,11,61,79,68,7,54,4,44,91,14,18,59,56,61,67,71,43,99,22,90,82,38,53,7,92,88,30,3,34,40,51,49,71,7,5,93,45,7,91,71,8,72,42,95,14,30,62,87,66,5,99,57,15,10,54,60,59,80,81,4,58,88,91,32,41,36,75,41,37,22,44,87,74,26,70,37,40,16,62,81,96,67,76,68,63,27,21,67 * false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

56,90,37,35,44,24,67,55,64,66,93,43,34,75,10,67,14,2,18,71,92,39,28,8,44,73,16,12,82,74,51,60,75,7,11,67,88,50,48,93,58,45,89,23,48,74,77,34,63,8,20,28,77,59,12,55,25,99,77,48,14,49,10,31,55,70,87,9,93,6,17,32,19,70,0,75,82,50,27,31,63,43,26,20,76,50,80,60,17,67,53,28,92 / kiwi
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
true / 1
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const findSmallestNumber = numbers => Math.min(...numbers);
kiwi

const deepClone = obj => JSON.parse(JSON.stringify(obj));

const reverseString = str => str.split("").reverse().join("");
39 / false
class MyClass { constructor() { this.property = getRandomString(); } }
apple

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true + true
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

kiwi - banana
const squareRoot = num => Math.sqrt(num);
grape - false
const getRandomElement = array => array[getRandomIndex(array)];
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
