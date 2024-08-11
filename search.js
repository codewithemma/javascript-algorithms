/* linear search */
const linearSearch = (arr, element, comperatorFn) => {
  let index = 0;
  for (const item of arr) {
    if (
      typeof element === "object" &&
      element !== null &&
      comperatorFn(element, item)
    ) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++;
  }
};

const arr = [5, 2, 4, 0.4, -1, 34, 53, 33];

const obj = [
  { name: "emma", age: 20 },
  { name: "favour", age: 23 },
];

// console.log(linearSearch(arr, -1));
// console.log(linearSearch(arr, 33));
// console.log(
//   linearSearch(obj, { name: "emma", age: 20 }, (el, it) => {
//     return el.name === it.name;
//   })
// );

/* binary search */
const findElement = (sortedArr, element) => {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
};

const arry = [1, 3, 5, 6, 7, 33, 55, 66, 87, 100];
console.log(findElement(arry, 33));
