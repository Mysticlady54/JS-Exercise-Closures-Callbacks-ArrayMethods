// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////

/**
 * ### Challenge `processLength`
 * 
 * @instructions
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * 
 * Implement a higher-order function called `processLength`.
 * It takes two arguments:
 * @param list an array with elements of any type.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the LENGTH of `list`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processLength` passing `['foo', 'bar']` and `(num) => num + 1000`,
 * should return 1002.
 * 
 * [2] Invoking `processLength` passing `[]` and `(num) => "There are " + num`,
 * should return "There are 0".
*/
function processLength(list, callback) {
  return callback(list.length)
  
}
const cback = (num) =>{
  return num + 1000
}
// console.log(processLength(arr, cback));


/**
 * ### Challenge `processLastItem`
 * 
 * @instructions
 * Implement a higher-order function called `processLastItem`.
 * It takes two arguments:
 * @param stringList array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the LAST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processLastItem` passing `['foo', 'bar']` and `(str) t=> str + str`,
 * should return 'barbar'.
*/
function processLastItem(stringList, callback) {
callback = arg2;
  return arg2 (stringList [stringList.length-1])
}
const arg2 = (stringlist)=>{
  return stringlist+ stringlist
//console.log(processLastItem(arr, arg2))

/**
 * ### Challenge `processSum`
 * 
 * @instructions
 * Implement a higher-order function called `processSum`.
 * It takes two arguments:
 * @param numberList array of numbers.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the SUM of all elements in `numberList`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processSum` passing `[10, 20, 30]` and `(num) => num + " is a big number!"`,
 * should return "60 is a big number!".
 * 
 * [2] Invoking `processSum` passing `[]` and `(num) => num + 1000`,
 * should return 1000.
*/
let SUM;
const numberList = []
function processSum(numberList, arg1) {
  return arg1(SUM);
 
}

const arg1 = (num) => {
   SUM = numberList.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
  }, 0)
  if (numberList.length > 0){
    return SUM + " is a big number"
  }else{
    return SUM + 1000;
  } 
}
//console.log(processSum(numberList, arg1))

/**
 * ### Challenge `processProduct`
 * 
 * @instructions
 * Implement a higher-order function called `processProduct`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the PRODUCT of `num1` and `num2`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processProduct` passing 2 and 7 and `(num) => num + " is a big number!"`,
 * should return "14 is a big number!".
 * 
 * [2] Invoking `processProduct` passing 25 and 0 and `(num) => num + 1000`,
 * should return 1000.
*/
let PRODUCT;
function processProduct( num1, num2, arg) {
  return arg(num1, num2)
  
}

const arg = (num1, num2)=>{
  let prod =  num1 * num2
  // console.log (prod)
  if ( num2 === 0 || num1 === 0){
    return prod + 1000 
  }else {
    return prod + " is a big number"
  }}
//console.log(processProduct(0, 5, arg));

/**
 * ### Challenge `processContains`
 * 
 * @instructions
 * Implement a higher-order function called `processContains`.
 * It takes three arguments:
 * @param item of any kind.
 * @param list array of elements of any kind.
 * @param callback function that takes a boolean as its argument.
 * @returns the result of invoking `callback` passing true if `item` exists in `list`, false otherwise.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processContains` passing
 * "foo" and `['foo', 'bar']` and `(bool) => bool ? 'nice!' : 'sad'`
 * should return "nice!".
 * 
 * [2] Invoking `processContains` passing
 * "lady gaga" and `['foo', 'bar']` and `(bool) => bool ? 'nice!' : 'sad'`,
 * should return "sad".
*/
let bol = false;
let item = "foo"
let list = ['foo', 'bar']
function processContains(item, list, arg4){
  
  return arg4 (bol)

}
const extra = (bol) => {
  if (list.includes(item)){
    bol = true
  }
  return bol ? 'nice' : 'sad'

}

console.log(processContains(item, list, extra))


/**
 * ### Challenge `processDuplicateFree`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * 
 * @instructions
 * Implement a higher-order function called `processDuplicateFree`.
 * It takes two arguments:
 * @param list array of elements of any kind.
 * @param callback function that takes an array as its argument.
 * @returns the result of invoking `callback` passing a de-duped version of `list`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processDuplicateFree` passing `[1,1,1,2]` and `(arr) => arr`,
 * should return `[1,2]`.
 * 
 * [2] Invoking `processDuplicateFree` passing `[1,1,2,2,3]` and `(arr) => arr.length`,
 * should return 3.
*/
let arr1 = [1,1, 1, 2, 2, 3]

function processDuplicateFree( list, callback) {
  return callback(list)
 
}
// not sure

// const deDupe = (arg5) =>{
//   let unique = Array.from(new Set(arr1))
//   return  unique + " and array.length is " + `${unique.length}`
// }

// console.log (processDuplicateFree(arr1, deDupe));

let runners =  [
  { id: 1, first_name: "Charmain", last_name: "Seiler", email: "cseiler0@wired.com", shirt_size: "2XL", company_name: "Divanoodle", donation: 75 },
  { id: 2, first_name: "Whitaker", last_name: "Ierland", email: "wierland1@angelfire.com", shirt_size: "2XL", company_name: "Wordtune", donation: 148 },
  { id: 3, first_name: "Julieta", last_name: "McCloid", email: "jmccloid2@yahoo.com", shirt_size: "S", company_name: "Riffpedia", donation: 171 },
  { id: 4, first_name: "Martynne", last_name: "Paye", email: "mpaye3@sciencedaily.com", shirt_size: "XL", company_name: "Wordware", donation: 288 },
  { id: 5, first_name: "Gussy", last_name: "Raraty", email: "graraty4@ucoz.ru", shirt_size: "L", company_name: "Oozz", donation: 291 },
  { id: 6, first_name: "Yule", last_name: "Tommasetti", email: "ytommasetti5@state.gov", shirt_size: "S", company_name: "Yodo", donation: 27 },
  { id: 7, first_name: "Kathie", last_name: "Majury", email: "kmajury6@guardian.co.uk", shirt_size: "3XL", company_name: "Zoomcast", donation: 261 },
  { id: 8, first_name: "Tanner", last_name: "Branton", email: "tbranton7@tmall.com", shirt_size: "2XL", company_name: "Realmix", donation: 28 },
  { id: 9, first_name: "Sarina", last_name: "Lasham", email: "slasham8@toplist.cz", shirt_size: "XL", company_name: "Gigashots", donation: 110 },
  { id: 10, first_name: "Bertie", last_name: "Lonergan", email: "blonergan9@issuu.com", shirt_size: "3XL", company_name: "Skinte", donation: 62 },
  { id: 11, first_name: "Trevor", last_name: "Studd", email: "tstudda@networkadvertising.org", shirt_size: "S", company_name: "Cogidoo", donation: 76 },
  { id: 12, first_name: "Malachi", last_name: "Okeshott", email: "mokeshottb@chron.com", shirt_size: "M", company_name: "DabZ", donation: 91 },
  { id: 13, first_name: "Berget", last_name: "Logsdail", email: "blogsdailc@wix.com", shirt_size: "M", company_name: "Mymm", donation: 9 },
  { id: 40, first_name: "Minna", last_name: "Hymas", email: "mhymas13@cornell.edu", shirt_size: "XS", company_name: "Vimbo", donation: 101 },
  { id: 41, first_name: "Jsandye", last_name: "Frend", email: "jfrend14@ca.gov", shirt_size: "XS", company_name: "Latz", donation: 156 }]


/////////////// HIGHER-ORDER ARRAY METHODS ///////////////
/////////////// HIGHER-ORDER ARRAY METHODS ///////////////

// A local community center is holding a fund raising 5k fun run and has invited
// 50 small businesses to make a small donation on their behalf for some much needed
// updates to their facilities. Each business has assigned a representative
// to attend the event along with a small donation.

/**
 * ### Challenge `getFullNames`
 * 
 * @instructions
 * Implement this function using forEach().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' full names in the following format: "Smith, John".
 * The full names appear in the array in the same order the runners appear in the `runners` array.
*/
let arr2 = []
function getFullNames(y) {
  
   y.forEach((element)=> arr2.push(`${element.first_name}, ${element.last_name}`)
  )
  return arr2  
}
// console.log(getFullNames(runners));


/**
 * ### Challenge `firstNamesAllCaps`
 * 
 * @instructions
 * The event director needs to have all the runners' first names 
 * in uppercase because the director BECAME DRUNK WITH POWER.
 * Implement this function using map().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' first names in ALL CAPS.
 * The first names appear in the array in the same order the runners appear in the `runners` array.
*/
function firstNamesAllCaps(runners) {
  let arr3 = runners.map((item)=> item.first_name.toUpperCase())
  
   return arr3;
 }
 
 // console.log(firstNamesAllCaps(runners));
 

/**
 * ### Challenge `getRunnersByTShirtSize`
 * 
 * @instructions
 * The event director needs a way to find the runners that need
 * a specific t-shirt size, so they can place the orders easily.
 * Implement this function using filter().
 * 
 * @param  array of runners like the one inside the /data/runners.js file.
 * @param tShirtSize string (possible values are "S", "M", "L", "XL", "2XL", "3XL").
 * @returns an array containing only the runners that use the given `tShirtSize`.
 * The runners in the array appear in the same order they appear in the `runners` array.
*/
let a = Array


function getRunnersByTShirtSize(a, c) {
  let d = a.filter( (item)=> c.includes(item.tShirtSize) )

  return d
}

// console.log(getRunnersByTShirtSize(runners, c))


/**
 * ### Challenge `tallyUpDonations`
 * 
 * @instructions
 * The donations need to be tallied up and reported for tax purposes.
 * Implement this function using reduce().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns a number which is the sum of the donations by all runners.
*/
function tallyUpDonations(runners) {
  let totalDonation =  runners.reduce( (acc, ctval) =>{
     return acc + ctval.donation
   }, 0)
  
   return totalDonation
 }
 // console.log(tallyUpDonations(runners))
 
/////////////// CLOSURES ///////////////
/////////////// CLOSURES ///////////////

/**
 * ### Challenge `counterMaker`
 * 
 * @instructions
 * Fix this function so a counter produced with it will increment correctly!
 * Usage is as follows:
 * 
 * const counter = counterMaker()
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * etc
*/
function counterMaker() {
  // 
  // // BROKEN CODE STARTS
  // let count = 0;
  // function counter() {
  //   ++count
  // }
  // BROKEN CODE ENDS
}

/**
 * ### Challenge `counterMakerWithLimit`
 * 
 * @instructions
 * Implement a counter maker that takes a max value for the count.
 * A counter created with it will reset itself after reaching the max value.
 * Usage is as follows:
 * 
 * const counter = counterMakerWithLimit(3)
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * etc
*/
function counterMakerWithLimit(/* CODE HERE */) {
  /* CODE HERE */
}

/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}

  if (processFirstItem) { module.exports.processFirstItem = processFirstItem }
  if (processLength) { module.exports.processLength = processLength }
  if (processLastItem) { module.exports.processLastItem = processLastItem }
  if (processSum) { module.exports.processSum = processSum }
  if (processProduct) { module.exports.processProduct = processProduct }
  if (processContains) { module.exports.processContains = processContains }
  if (processDuplicateFree) { module.exports.processDuplicateFree = processDuplicateFree }
  if (getFullNames) { module.exports.getFullNames = getFullNames }
  if (firstNamesAllCaps) { module.exports.firstNamesAllCaps = firstNamesAllCaps }
  if (getRunnersByTShirtSize) { module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize }
  if (tallyUpDonations) { module.exports.tallyUpDonations = tallyUpDonations }
  if (counterMaker) { module.exports.counterMaker = counterMaker }
  if (counterMakerWithLimit) { module.exports.counterMakerWithLimit = counterMakerWithLimit }
}
}