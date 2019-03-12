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
