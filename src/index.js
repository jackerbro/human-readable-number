module.exports = function toReadable (number) {
  if(number === 0) return "zero";
  var num = number.toString().split('').reverse();
  var result ="";
  var length = num.length;
  
  for(var i = length; i > 0; i -= 1) {
    switch(i) {
      case 7:
        if(num[i - 1] === "0") {
          break;
        }
        result += firstOrderNumbers[num[i - 1]] + " " + bigNumbers[7] + " ";
        break;
      case 6:
        if(num[i - 1] === "0") {
          break;
        } else if(num[i - 2] === "0" && num[i - 3] === "0"){
          result += firstOrderNumbers[num[i - 1]] + " " + bigNumbers[3] + " " + bigNumbers[4] + " ";
          i -= 2;
          break;
        }
        result += firstOrderNumbers[num[i - 1]] + " " + bigNumbers[3] + " ";
        break;
      case 5:
        if(num[i - 1] === "0") {
          break;
        } else if(num[i - 1] === "1") {
          result += tenNumbers[num[i - 2]] + " " + bigNumbers[4] + " ";
          i -= 1;
          break;
        } else {
          result += secondOrderNumbers[num[i - 1]] + " ";
        }
        break;
      case 4:
        if(num[i - 1] === "0") {
          result += bigNumbers[4] + " ";
        } else {
          result += firstOrderNumbers[num[i - 1]] + " " + bigNumbers[4] + " ";
        }
        break;
      case 3:
        if(num[i - 1] === '0') {
          break;
        }
        result += firstOrderNumbers[num[i - 1]] + " " + bigNumbers[3] + " ";
        if(num[i - 2] === "0" && num[i - 3] === "0"){
          i -= 2;
          break;
        }
        break;
      case 2:
        if(num[i - 1] === "0") {
          break;
        } else if(num[i - 1] === "1") {
          result += tenNumbers[num[i - 2]] + " ";
          i -= 1;
          break;
        } else {
          result += secondOrderNumbers[num[i - 1]] + " ";
        }
        break;
      case 1:
        if(num[i - 1] === "0") {
          break;
        } else {
          result += firstOrderNumbers[num[i - 1]];
        }
        break;
    }
  }
  return result.trim();
};

var firstOrderNumbers = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};
var tenNumbers = {
  0: "ten",
  1: "eleven",
  2: "twelve",
  3: "thirteen",
  4: "fourteen",
  5: "fifteen",
  6: "sixteen",
  7: "seventeen",
  8: "eighteen",
  9: "nineteen"
};

var secondOrderNumbers = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety"
};

var bigNumbers = {
  3: "hundred",
  4: "thousand",
  7: "million",
  10: "billion",
  13: "trillion"
};
