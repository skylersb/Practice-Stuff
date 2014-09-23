//Practice Toy Problems

//Create a function to reverse a string without using the "reverse" property.

var string = "reverse this string";

var reverseStr = function(str){
var newString = [];
    string = string.split("");
for(var i = str.length - 1; i >= 0; i--){
   newString.push(str[i]);
    }
    return newString.join("");
}
alert(reverseStr(string));


//Write a function called factorial that takes in a number and returns the factorial (!) of that number. Example: factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 === 120

    //code here

var factorial = function(num){
    if (num === 0)
        return (1)
    else
        return num * factorial(num-1) //return 4 * 3
                                      // return 12 * 2
                                      // return 24 * 1 = 24
}

alert(factorial(4)); //24
