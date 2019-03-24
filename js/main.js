// Highest and Lowest

function highAndLow(numbers){
  // ...
  const numArr = numbers.split(" ").map(x => parseInt(x));
  // set low to first num
  var low = numArr[0];
  numArr.forEach(function(el, index){
    if(low > numArr[index + 1]) {
      low = numArr[index + 1];
    }
  })
  // set high num
  var high = numArr[0];
  numArr.forEach(function(el, index){
    if(high < numArr[index + 1]) {
      high = numArr[index + 1];
    }
  })

  return high + " " + low;
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  //return true or false
  const numArr = pin.split('');
  if (numArr.length == 4 | numArr.length == 6) {
    var pinLength = numArr.length;
    var count = 0;
    numArr.forEach(function(el){
      if(Number.isInteger(Number.parseInt(el,10))) {
        count++;
      }
    });
    if(count == pinLength) {
       return true;
    } else {
      return false;
    }
  }
  return false;
}


function validateForm() {
  var outId = document.getElementById("output");
  var x = document.forms["validatepin"]["fname"].value;
  outId.innerHTML = validatePIN(x)

}
// Create a function that returns the sum of the two lowest positive numbers given
// an array of minimum 4 integers. No floats or empty arrays will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should
// be 7.

function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers.sort(function(a, b) { return a - b;})
  return numbers[0] + numbers[1];

};

// Write a function called which verifies that a coupon code is valid, the coupon
// is not expired. A coupon is no more valid on the day AFTER the expiration date.
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
 console.log(enteredCode + ' ' + correctCode + ' ' + currentDate + ' ' + expirationDate)
 console.log(enteredCode.length);
  if(enteredCode.toString().length < 3 || enteredCode.toString() != correctCode.toString() || enteredCode == '') {
    return false;
  }
  var dateNow = new Date(currentDate);
  var dateCoupon = new Date(expirationDate);
  if (dateNow > dateCoupon) {
    return false;
  }

  return true;

}

// create a function that when provided with a triplet, returns the index of the
// numerical element that lies between the other two elements. The input to the
// function will be an array of three distinct numbers (Haskell: a tuple).
//For example:
//gimme([2, 3, 1]) => 0

var gimme = function (inputArray) {
  // Implement this function
  var copy = inputArray.split('').map(x => Number.parseInt(x));
  var orig = inputArray.split('').map(x => Number.parseInt(x));
  orig.sort(function(a,b) {
    return a - b;
  });
  console.log(inputArray);
  return copy.indexOf(orig[1]);
};
//
// You have to write a function printer_error which given a string will output the
// error rate of the printer as a string representing a rational whose numerator is
// the number of errors and the denominator the length of the control string. Don't
// reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from
// ato z.
// #Example:
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

function printerError(s) {
    // your code
    var colors = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    var errCount = 0;
    var strArr = s.split('');
    var inputCount = strArr.length;
    strArr.forEach(function(el){
      if(colors.indexOf(el) == -1) {
        errCount++;
      }
    });
    return errCount +'\/'+ inputCount;
}

// best soulution
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }

You are given an array strarr of strings and an integer k. Your task is to
return the first longest string consisting of k consecutive strings taken in
the array.
Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta",
"abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
    // your code
    if(strarr.length == 0 || k > strarr.length || k <= 0) {
      return "";
    }
    var longest = "";
    var curLongest = 0;
    strarr.forEach(function(el, i, arr){
      var arrLenght = arr.lenght;
      if(i != arrLength-1) {
      var joined = el + arr[i + 1];
      var length = (el.length + arr[i + 1]).length;
      curLongest = (curLongest >= length) ? curLongest : length;
      }
    ));


}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(ob){
        return ob.hasOwnProperty(key);
    })
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
   return arr.filter(function(el) {
        return el === searchValue;
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(function(ob) {
        return ob[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = ["a","e","i","o","u"];
    return str.toLowerCase().split('').filter(function(el){
        return vowels.indexOf(el) == -1;
    }).join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    return arr.filter(function(el){
        return el % 2 !== 0;
    }).map(function(odd){
        return odd * 2;
    })
}

// every and some array methods
/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    return arr.some(function(el){
        return el % 2 !== 0;
    })
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    return num.toString().split('').some(function(num){
        return num === '0';
    })
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num % 2 !== 0;
    })
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
    return arr.every(function(el, i , array ){
        return array.filter(num => num === el ).length !== 2;
    })
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    return arr.every(function(ob){
        return ob.hasOwnProperty(key);
    })
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false

*/

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(ob){
        return (ob.hasOwnProperty(key) && ob[key] === searchValue)
    })
}
