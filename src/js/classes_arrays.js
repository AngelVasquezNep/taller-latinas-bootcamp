/**
 *
 * Arrays
 *
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * Simple definition:
 *    A collection of elements each identified by at least one array index.
 *
 * Creation:
 *    By [] notation or by its constructor new Array()
 *
 * Access to some element by its index:
 *    const myArray = [1, 2, 3]
 *    myArray[0] -> 1
 *    myArray[1] -> 2
 *    myArray[2] -> 3
 *
 */

const numbers = [1, 2, 3, 4, 5, 6];
const chars = ["a", "b", "c", "d", "e"];

const supermarketList = [
  { count: 1, name: "Cookies", price: 20 },
  { count: 1, name: "Milk", price: 19 },
  { count: 1, name: "Candies", price: 10 },
  { count: 1, name: "Chocolate", price: 23 },
  { count: 1, name: "Bread", price: 35 },
  { count: 1, name: "Rice", price: 24 },
  { count: 1, name: "Salmon", price: 200 },
  { count: 1, name: "Butter", price: 10 },
  { count: 1, name: "Eggs", price: 70 },
  { count: 1, name: "Soup", price: 12 },
];

/*
 * for of
 */

/* Iterate over simple arrays */

// for (const number of numbers) {
//   console.log(number)
// }

// for (char of chars) {
//   console.log(char)
// }

/* howMuchIsIt using for of */

// function howMuchIsIt(list) {
//   let total = 0;

//   for (const item of list) {
//     console.log(item)
//     total = total + item.price * item.count
//   }

//   return total;
// }

// const total = howMuchIsIt(supermarketList);
// console.log("Total: ", total);

/*
 * -------------------------------------------------------------------------------
 */

/*
 * forEach
 */

/* howMuchIsIt using forEach */

// function howMuchIsIt(list) {
//   let total = 0;

//   list.forEach((item) => {
//     console.log(item);
//     total = total + item.price * item.count;
//   });

//   return total;
// }

// const total = howMuchIsIt(supermarketList);
// console.log("Total: ", total);

/*
 * -------------------------------------------------------------------------------
 */

/*
 * Map
 *
 * Documentation:
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

// function shoppingForManyPeople(list, peopleCount) {
//   const newList = list.map(function (item) {
//     return {
//       count: peopleCount,
//       name: item.name,
//       price: item.price,
//     };
//   });

//   console.log("newList: ", newList);

//   return newList;
// }

// const newSupermarketList = shoppingForManyPeople(supermarketList, 10);
// console.log("Original super market list", supermarketList)
// console.log('\n')
// console.log("New super markert list", newSupermarketList)

// const total = howMuchIsIt(newSupermarketList);
// console.log("Total: ", total);

/*
 * -------------------------------------------------------------------------------
 */

/*
 * Filter
 */

// function whichProductCanIBuy(list, myMoney) {
//   const newList = list.filter((item) => item.price <= myMoney);

//   return newList;
// }

// const iCanBuyOneOfThis = whichProductCanIBuy(supermarketList, 19);
// console.log("iCanBuyOneOfThis", iCanBuyOneOfThis);

/*
 * Find
 */

// function listHasThis(list, myProduct) {
//   const productFouned = list.find(
//     (item) => item.name.toLowerCase() === myProduct.toLowerCase()
//   );

//   // return Boolean(item)

//   if (productFouned) {
//     console.log("Si hay", productFouned);
//     return true;
//   }

//   return false;
// }

// const isThereChocolate = listHasThis(supermarketList, "Chocolate");
// console.log("isThereChocolate: ", isThereChocolate);

// const isThereMilk = listHasThis(supermarketList, "Milk");
// console.log("isThereMilk: ", isThereMilk);
