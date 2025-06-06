function recursiveFunction(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFunction(n - 1) + recursiveFunction(n - 2);
}

console.log(recursiveFunction(1));
console.log(recursiveFunction(5));
console.log(recursiveFunction(8));
