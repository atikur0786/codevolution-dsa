function secondLargest(arr) {
  let firstLargest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return {
    firstLargest,
    secondLargest,
  };
}

const arr = [4, 9, 9, 0, 2, 8, 7, 1];
const result = secondLargest(arr);
console.log(result);
