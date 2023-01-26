'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngridents, ...otherIngridents) {
    console.log(mainIngridents);
    console.log(otherIngridents);
  },
};

// The for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

/**
 * * Spread Operators
 */

const arr = [7, 8, 9];
const badNewarr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewarr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Biryani'];
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//  Iterables: arrays, strings, maps, sets. Not Objects

const str = 'Zeeshan';
const letters = [...str];
console.log(letters);

// const ingredients = [
//   prompt("let's make pasta!  Ingredients 1?"),
//   prompt("let's make pasta!  Ingredients 2?"),
//   prompt("let's make pasta!  Ingredients 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 2000,
  ...restaurant,
  founder: 'M.Zeeshan Muneer',
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Food's Inn";

console.log(restaurant.name);
console.log(restaurantCopy.name);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 22',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 22',
//   starterIndex: 2,
// });

// 1) Destructuring...
/**
 * * Spread,Because on Right side of =
 */

const arr1 = [1, 2, ...[3, 4]];

/**
 * * Rest, Because on Left side of =
 */

const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(arr1);
console.log(a, b, others);

const [pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, othersFood);

// objects
const { sat, ...weakdays } = restaurant.openingHours;
console.log(weakdays);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);
add(1, 2, 3, 5, 6, 7, 8, 9, 10);

const spread = [51, 23, 1, 5, 252, 5];
add(...spread);

restaurant.orderPizza('chickens', 'onion', 'olives', 'spinach');

/**
 * * Use Any Data Type, Return Any Data type, Short-circuiting
 */

console.log('-------OR-------');

console.log(3 || 'Zeeshan');
console.log('' || 'Zeeshan');
console.log(0 || 'Zeeshan');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-------AND-------');

console.log(0 && 'Zeeshan');
console.log(7 && 'Zeeshan');

console.log('Hello' && 23 && null && 'Zeeshan');

// Practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish : null and undefined ( Not 0 or " ")
const guetCorrect = restaurant.numGuests ?? 10;
console.log(guetCorrect);

/**
 * * Logical Assignments Operators
 */

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Zeeshan',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
// Functions

//objects
// // Before Destructuring.

// const arr = [1, 2, 3];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// // After Destructuring.
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// /**
//  * * Switching Values
//  */

// // Before Destructring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // with Destructring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// const nested = [2, 4, [5, 6]];

// // const [nest1, , nest2] = nested;
// // console.log(nest1, nest2);

// /**
//  * * Nested destructring
//  */
// const [nest1, , [nest2, nest3]] = nested;
// console.log(nest1, nest2, nest3);

// /**
//  * * Default Values
//  */

// const [p = 1, q = 1, , r = 1] = [9, 6];
// console.log(p, q, r);

// /**
//  * * Destructring Objects
//  */

// console.log('____________Destructring Objects ____________');
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// /**
//  * * Default Values
//  */

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// /**
//  * * Mutating Variables
//  */

// let ab = 999;
// let bc = 111;

// const obj = { ab: 33, bc: 44, zz: 36 };
// ({ ab, bc } = obj);
// console.log(ab, bc);

// /**
//  * * Nested Objects
//  */

// const {
//   fri: { open: o, close: cl },
// } = openingHours;

// console.log(o, cl);
