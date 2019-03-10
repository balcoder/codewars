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
