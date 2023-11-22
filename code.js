// Convert celsius to fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}
  
console.log(convertCtoF(30));

// Reverse string
function reverseString(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}
  
console.log(reverseString("hello"));

// Factorialize a number
function factorialize(num) {

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialize(5)); // svaret ska vara 120

// Find longest word in string, return length of loongest word
function findLongestWordLength(str) {
  const arr = str.split(" ");
  let longestWord = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Return an array with the largest number from each provided sub-array
function getHighestNumber(arr) {
  let highest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}

function largestNumberArray(arr) {
  let resultArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    //const subArr = arr[i];
    //const highest = getHighestNumber(subArr);
    //resultArr.push(highest);
    resultArr.push(getHighestNumber(arr[i]));
  }
  return resultArr;
}

console.log(largestNumberArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Check if a string ends with the given target string
function confirmEnding(str, target) {
  //let lastLetter = str.length - 1;
  //return str[lastLetter] == target;

  const targetLength = target.length;
  const strLengtt = str.length;
}

console.log(confirmEnding("Bastian", "n"));