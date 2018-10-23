/*
 Write a method is_narcissistic(i) which returns whether or not i is a Narcissistic Number.
 A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number.
 If this seems confusing, refer to the example below.
 Ex: 153, where n = 3 (number of digits in 153)
 1^3 + 5^3 + 3^3 = 153
 */

function is_narcissistic(number) {

    var numberToString = number.toString();
    var digitsLength = numberToString.length;
    var realDigits = numberToString.split('').map(number => parseInt(number));
    var sum = 0;

    for(var i=0 ; i<digitsLength; i++) {
        sum += Math.pow(realDigits[i], digitsLength);
    }

    var resultList = document.getElementById("numberResult");
    var newElement = document.createElement("li");
    resultList.appendChild(newElement);

    if (parseInt(sum) == number) {
        newElement.innerHTML = number + " is narcissistic number!"
    } else {
        newElement.innerHTML = number + " is not narcissistic number!"
    }

}

is_narcissistic(153);
is_narcissistic(13);
is_narcissistic(1345);
