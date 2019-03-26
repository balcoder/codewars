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

// Array.reduce methods

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
    return arr.reduce(function(accumulator, next){
        if(next[key]){
         accumulator.push(next[key]);
         return accumulator;
        } else return accumulator;
    }, [])
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
   var vowels = ["a","e","i","o","u"];
   var strArr = str.toLowerCase().split('');
   return strArr.reduce(function(acc, next){
       if(vowels.indexOf(next) !== -1){
           if(acc[next]){
               acc[next]++
               return acc;
           } else {
               acc[next] = 1;
               return acc;
           }
       }
       return acc;
   }, {})
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

    addKeyAndValue(arr, 'title', 'Instructor') //
      [
        {title: 'Instructor', name: 'Elie'},
        {title: 'Instructor', name: 'Tim'},
        {title: 'Instructor', name: 'Matt'},
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc , next){
        next[key] = value;
        return acc;
    },arr)
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

Examples:

    function isEven(val){
        return val % 2 === 0;
    }

    var arr = [1,2,3,4,5,6,7,8];

    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }

    var names = ['Elie', 'Colt', 'Tim', 'Matt'];

    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce(function(acc, next){
        if(callback(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    },[[],[]])
}

// closures
/*
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples:

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
    if(arguments.length === 2 ) {
        return a * b;
    } else {
        return function(num){

            return a * num;
        }
    }

}

/*
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount){
    var answer = Math.floor(Math.random() * 11);
    var counter = 0;
    return function(guess){
        if(counter === amount){
            return "You are all done playing!";
        }
        counter++;
        if(guess < answer){
            return "You're too low!";
        } else if(guess > answer) {
            return "You're too high!";
        } else {
            counter = answer;
            return "You got it!";
        }


    };
}

// call Apply and bind
/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('div');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
   return [].slice.apply(arrayLikeObject); //[].slice same as Array.prototype.slice


}

/*
// Write a function called sumEvenArguments which takes all of the arguments
// passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
    var newArr = [].slice.apply(arguments);
    return newArr.filter(num => num % 2 === 0).reduce((accumulator,
       currentValue) => accumulator + currentValue);
}

/*
Write a function called invokeMax which accepts a function and a maximum amount.
invokeMax should return a function that when called increments a counter. If the
counter is greater than the maximum amount, the inner function should return
"Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num){
    var max = 0;
    return function(){
        if(max >= num) return "Maxed Out!";
        max++;
        return fn.apply(this,arguments);
    }
}

/*
Write a function called once which accepts two parameters, a function and a
value for the keyword 'this'. Once should return a new function that can only be
invoked once, with the value of the keyword this in the function set to be the
second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined

    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }

    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined


*/

function once(fn, thisArg){
    var hasBeenCalled = false;
    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments)
        }
    }
}

// BONUSES!

/*
Write a function called bind which accepts a function and a value for the
keyword this. Bind should return a new function that when invoked, will invoke
the function passed to bind with the correct value of the keyword this. HINT -
if you pass more than two parameters to bind, those parameters should be
included as parameters to the inner function when it is invoked. You will have
to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }

    var person = {
        firstName: 'Elie'
    }

    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"

    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue"

    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs)
        return fn.apply(thisArg, allArgs)
    }
}

/*
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)




Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }

    var person = {
        firstName: 'Elie'
    }

    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"

    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"

    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }
}


// Constructor functions

/// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

Person.prototype.fullName = function(){
    return this.firstName + " "  + this.lastName;
}

Person.prototype.addToFamily = function(member){
    var checkObj = this.family.filter(el => el === member);
    if(member instanceof Person && checkObj.length === 0) {
                this.family.push(member);
    }
    return this.family.length;
}



/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples:

    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1

    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array.

Array.prototype.map = function(callback){
  var newArr = [];
  for(var i = 0; i < this.length; i++){
    newArr.push(callback(this[i], i, this))
  }
  return newArr;
}

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
// function reverse(str) {
//     var strArr = str.split("");
//     return strArr.reverse().join('');
// }

String.prototype.reverse = function(){
  var newStr = '';
  for(var i = this.length -1; i >= 0; i--){
    newStr += this[i]
  }
  return newStr;
}
