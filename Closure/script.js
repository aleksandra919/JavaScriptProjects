/*
Write a sum method which will work properly when invoked using either syntax below
 console.log(sum(2,3));   // Outputs 5
 console.log(sum(2)(3));  // Outputs 5
 */
function sum(a,b) {
    if (arguments.length < 2) {
        return function (b) {
            return a + b
        }
    }
    else {
        return a+b
    }
}

console.log(sum(2)(3));
console.log(sum(2,3));