function largestNum(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const arr = [5, 0, 10, 8, 17, 1, 7];
const result = largestNum(arr);

console.log(result);
