// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// const reverseString = function(word) {

//     let str = "";
//     for(let len = word.length - 1; len >= 0; len--){
//         str += word[len];
//     }
//     return str;
// };


//alternate

// const reverseString = function(str) {

// let splitString = str.split("");
// let reverseArray = splitString.reverse();
// let newArray = reverseArray.join("");

// return newArray;
// };

// alternate chained
const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

// Do not edit below this line
module.exports = reverseString;
