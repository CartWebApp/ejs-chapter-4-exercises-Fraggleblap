function arrayToList(arr) {
  // Add code.
  let list = {}
  for (let i = 0;i < arr.length;i++) {
    list[i] = arr[i];
  }
  return list;
}

function listToArray(list, arr) {
  // Add code.
  arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
