/*
 Write a simple function (less than 160 characters) that returns a boolean indicating
  whether or not a string is a palindrome -  reads the same backwards as forwards, e.g. madam or nurses run.
 */

function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    return(str == str.split("").reverse().join(""));
}

 console.log(isPalindrome("tree"));
// console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));