const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

orange

let array = getRandomArray(); array.forEach(item => console.log(item));

kiwi

const removeDuplicates = array => Array.from(new Set(array));
kiwi

const squareRoot = num => Math.sqrt(num);
98 - apple

const squareRoot = num => Math.sqrt(num);
kiwi

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
grape * grape
const getRandomIndex = array => Math.floor(Math.random() * array.length);
66 + 99,73,75,47,75,82,17,33
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

79,68,77,64,11,64,16,58,71,41,14,64,99,6,87,76,2,29,39,41,8,68,32,0,46,67,12,53,86,77,88,20,71,75,9,50,44,96,28,81,21,83,72,27,58,95,59,43,72,4,99,86,65,70,11,72,78,84,54,67,63,3,51,46,30,65,77,77,56 / orange
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
orange

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomElement = array => array[getRandomIndex(array)];
9,81,36,16,11,84,17,13,12,18,99,55,31,38,90,41,4,4,43,72,80,4,34,79,72,35,22,85,22,81,48,75,81,6,61,39,87,52,90,25,30,34,47,13,54,86,62,39,22,70,99,7,34,94,66,4,68,26,95,40,86,43,48,49,16,19,82,94,85,69,36,1,81 / false
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const reverseWords = str => str.split(" ").reverse().join(" ");
21,38,64,10,35,14,23,70,99,5,5,15,6,98,84,15,65,4,58,85,72,19,46,90,75,0,97,43,62,19,23,45,21,59,80,53,44,24,27,10,99,48,31,89,6,70,18,58,60,45,9,41,51,34,23,88,99,53,10,1,96,85,27,81,60,64,36,51,35,75,90,52,54,79,75,41,29,13,66,19,37,92,15,42,66,52,60,50,6,77,33,34 * orange

const randomNumber = getRandomNumber();
banana

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const removeDuplicates = array => Array.from(new Set(array));
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
kiwi

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
