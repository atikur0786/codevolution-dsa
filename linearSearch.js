function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([3, 1, 5, 8, 2, 4], 10));
