function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

const arr = [2, -9, 17, 0, 1, -10, 0, 1, -10, -4, 8];

const count = countNegativeNumbers(arr);
console.log(count);
