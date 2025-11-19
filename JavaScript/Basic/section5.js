let numbers = [3, 4];
console.log(numbers);

// Add element to the End
numbers.push(5, 6);
console.log(numbers);

// Add element to the Beginning

numbers.unshift(1, 2);
console.log(numbers);

// Add element in the middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);

// Finding Elements

numbers = [1, 2, 3, 4, 5, 9, 1, 6];

console.log(numbers.indexOf("a")); // it will return -1 since 'a' is not present

console.log(numbers.indexOf("1"));

console.log(numbers.indexOf(1));

console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);

console.log(numbers.includes(1));

// Finding elements of Reference Types

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" })); // this is not ideal way to find element of the reference type

let coursea = courses.find(function (course) {
  return course.name === "a";
});

coursea = courses.find((course) => course.name === "a");

console.log(coursea);

let courseaIndex = courses.findIndex(function (course) {
  return course.name === "a";
});
courseaIndex = courses.findIndex((course) => course.name === "a");

console.log(courseaIndex);

// Removing Elements
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// End

const last = numbers.pop();
console.log(last);
// Beginning
const first = numbers.shift();
console.log(first);

// Middle

const removedEle = numbers.splice(2, 1);
console.log(removedEle);
console.log(numbers);

// Emptying an Array

anotherArr = numbers;
// numbers = [];

console.log(numbers);
console.log(anotherArr);

numbers.length = 0;

console.log(numbers);
console.log(anotherArr);

numbers.splice(0, numbers.length);

while (numbers.length > 0) numbers.pop();

// Combinig and silicing arrays

const firstArr = [1, 2, 3];

const secondArr = [4, 5, 6];

const combined = firstArr.concat(secondArr);
console.log(combined);

const slice = combined.slice(2, 4);

console.log(slice);

const copy = combined.slice();

console.log(copy);

const firstArrObj = [{ id: 1 }];

const combinedArrObj = firstArrObj.concat(secondArr);

combinedArrObj[0].id = 10;
console.log(combinedArrObj);
console.log(firstArrObj);

// Spread Arr

const combinedUsingSpred = [...firstArr, ...secondArr];

console.log(combinedUsingSpred);

const copySpredOp = [...combinedUsingSpred];
console.log(copySpredOp);

// Iterating an array
numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers) console.log(number);

numbers.forEach(function (number) {
  console.log(number);
});

numbers.forEach((number) => console.log(number));

numbers.forEach((number, index) => console.log(index, number));

const joined = numbers.join(",");

console.log(joined);

const message = "This is my first message";

const parts = message.split(" ");
console.log(parts);

const combinedParts = parts.join("-");

console.log(combinedParts);

// Sorting array

numbers = [2, 4, 5, 1, 3];
console.log(numbers);

numbers.sort();

console.log(numbers);

numbers.reverse();
console.log(numbers);

courseDetails = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

console.log(courseDetails);
courses.sort();
console.log(courseDetails);

courseDetails.sort(function (a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courseDetails);

courseDetails.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courseDetails);

// Testing the Element of an Array

numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);
numbers = [1, 2, -1];
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);

// Filterig an Array

numbers = [1, -1, 2, 3, 4, 5];

let filtered = numbers.filter(function (value) {
  return value >= 0;
});

filtered = numbers.filter((number) => number >= 0);

console.log(filtered);

// Mapping an array

let items = filtered.map((num) => "<li>" + num + "</li>");

console.log(items);

let html = "<ul>" + items.join("") + "</ul>";

console.log(html);

// items = filtered.map((num) => {
//   const obj = { value: num };
//   return obj;
// });

items = filtered.map((num) => ({ value: num }));

console.log(items);

items = numbers
  .filter((num) => num >= 0)
  .map((num) => ({ value: num }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);

numbers = [1, -1, 2, 3, 3, 4, 9];

let sum = 0;
for (let n of numbers) sum += n;

console.log(sum);

sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

numbers = arrayFromRange(1, 4);
numbers = arrayFromRange(-10, 4);
console.log(numbers);

function arrayFromRange(min, max) {
  const arr = [];
  for (let num = min; num <= max; num++) {
    arr.push(num);
  }
  return arr;
}

function includes(array, searchElement) {
  //   return array.includes(searchElement);
  //   for (let element of array) if (element === searchElement) return true;
  //   return false;
  found = false;
  array.forEach((num) => {
    if (num === searchElement) found = true;
  });
  return found;
}

console.log(includes(numbers, 2));

numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;

  if (position > array.length) {
    console.error("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}

numbers = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 1];
const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  //   let count = 0;
  //   for (let num of array) if (num === searchElement) count++;
  //   return count;
  //   return array.reduce((accumulator, current) => {
  //     const occurrence = current === searchElement ? 1 : 0;
  //     return accumulator + occurrence;
  //   }, 0);

  return array.reduce((acc, curr) => {
    return curr === searchElement ? acc + 1 : acc;
  }, 0);
}

numbers = [];
const max = getMax(numbers);
console.log(max);

console.log(numbers);
function getMax(array) {
  if (array.length === 0) return;

  return array.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  });

  //   let max = array[0];
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] > max) {
  //       max = array[i];
  //     }
  //   }
  //   return max;
}

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title
// result 'b' 'a'

// const titles = movies
//   .filter((movie) => movie.rating >= 4 && movie.year === 2018)
//   .sort((m1, m2) => {
//     if (m1.rating > m2.rating) return 1;
//     if (m1.rating < m2.rating) return -1;
//     return 0;
//   })
//   .reverse()
//   .map((movie) => movie.title);

const titles = movies
  .filter((movie) => movie.rating >= 4 && movie.year === 2018)
  .sort((m1, m2) => m1.rating - m2.rating)
  .reverse()
  .map((movie) => movie.title);

console.log(titles);
