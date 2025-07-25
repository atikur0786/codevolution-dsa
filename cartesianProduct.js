function cartesianProduct(arr1, arr2) {
  const finalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let temp = [];
      temp.push(arr1[i], arr2[j]);
      finalArray.push(temp);
    }
  }

  return finalArray;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2)); // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Big-O = O(mn)
