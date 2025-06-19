/**
 *  Square star
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *
 */

function squareStartPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

squareStartPattern(4);
console.log("------------------");

/**
 * second pattern
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */

function secondPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

secondPattern(5);
console.log("------------------");

/**
 * third pattern
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

function thirdPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}

thirdPattern(5);
console.log("------------------");

/**
 * fourth pattern
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */
function fourthPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1) + " ";
    }
    console.log(row);
  }
}
fourthPattern(5);
console.log("------------------");

/**
 * Fifth pattern
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */
function fifthPattern(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }
    console.log(row);
  }
}
fifthPattern(5);
console.log("------------------");

/**
 * Sixth pattern
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 */
function sixthPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
sixthPattern(5);
console.log("------------------");

/**
 * Seventh pattern
 *         *
 *       * *
 *     * * *
 *   * * * *
 * * * * * *
 */
function SeventhPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i + 1; j++) {
      row = row + " ";
    }

    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
SeventhPattern(5);
console.log("------------------");

/**
 * Eight pattern
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 */
function eightPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle + " ";
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
eightPattern(5);
console.log("------------------");

/**
 * Eight pattern
 * 1
 * 0 1
 * 0 1 0
 * 1 0 1 0
 * 1 0 1 0 1
 */
function ninthPattern(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle + " ";
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
ninthPattern(5);
console.log("------------------");
