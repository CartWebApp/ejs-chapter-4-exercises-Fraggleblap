function range(start, end, step = 1) {
  // Add code.
  const returnArray = [];
  for (let i = start; i != end; i+= step) {
    returnArray.push(i);
  }
  returnArray.push(end);
  return returnArray;
}

function sum(numbers) {
  // Add code.
  let temp = 0;
  for (let i = numbers.length-1; i >= 0;i--) {
    temp += numbers[i];
  }
  return temp;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
