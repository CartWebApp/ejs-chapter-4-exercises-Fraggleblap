function reverseArray(arr) {
  // Add code.
  let tempArr = [];
  for (let i = arr.length; i > 0; i--) {
    tempArr.push(arr[i-1]);
  }
  return tempArr;
}

function reverseArrayInPlace(arr) {
  // Add code.
  let tempArr2 = [];
  for (let i = arr.length; i > 0; i--) {
    tempArr2.push(arr[i-1]);
    arr.pop();
  }
  for (let i = 0; i < tempArr2.length; i++) {
    arr.push(tempArr2[i]);
  }
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]