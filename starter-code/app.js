'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
====Write a function called sum()=== that...
===that takes in two numbers as arguments=== and then
===returns an array where...
the first element is:    the sum of those numbers,
the second element is:   a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here

// var firstNumber = 4;
// var secondNumber = 7;

function sum(number1, number2) { //eslint-disable-line
  var addedNumber3 = number1 + number2;
  var sentenceString = ('The sum of ' + number1 + ' and ' + number2 + ' is ' + addedNumber3 + '.');
  var final = [addedNumber3, sentenceString];
  // console.log(final);
  return final; //
}

// Here is the test for sum(); uncomment it to run it

testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////

/* Problem 2

1. TODO: Write a function called multiply(). THAT...
2. takes in two numbers as TODO: arguments AND...
3. TODO: returns an array where...
    - 1. TODO: the first element is the product of those numbers
    - 1. TODO: second element is a string that EXACTLY follows this example and uses the values that were input into the function:
          "The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var doTheMultiply = a * b;
  var stringMultiply = 'The product of ' + a + ' and ' + b + ' is 45.';
  return [doTheMultiply, stringMultiply];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
TODO: Write a function called sumAndMultiply() that...
TODO: takes in three numbers as separate arguments and...
TODO: returns an array where:
    TODO: the first element is the sum of those three numbers
    TODO: the second element is the product of those three numbers
    and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
    TODO:Third element: "4 and 7 and 5 sum to 16."
    TODO:Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: TODO: You may not use the arithmetic operators + and * in this function.
To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var sumElement = sum((sum(a,b)[0]), c)[0];
  var multiplyElement = multiply((multiply(a,b)[0]), c)[0];
  var elementTheThird = a + ' and ' + b + ' and ' + c + ' sum to ' + sumElement + '.';
  var elementTheFourth = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplyElement + '.';
  // console.log(sumElements + ' is their sum.');
  // console.log(multiplyElement + ' is their product.');
  // console.log(a + ' and ' + b + ' and ' + c + ' sum to ' + sumElements + '.');
  // console.log(elementTheThird);
  // console.log('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplyElement + '.');
  // console.log(elementTheFourth);
  // console.log(sumElement, multiplyElement, elementTheThird, elementTheFourth)
  return [sumElement, multiplyElement, elementTheThird, elementTheFourth];
}

sumAndMultiply(4,7,5);

// Here is the test for sumAndMultiply(); uncomment it to run it

testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4

Write a function called sumArray() that...
takes in an array of numbers as its single argument and then returns...
   an array where...
        TODO:the first element is the sum of the numbers in the array
        TODO: the second element is a string that EXACTLY follows this example and uses the values that were input
              into the function:
                    "2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(numbersArray) { //eslint-disable-line;
  var arraySummed = sum(sum(numbersArray[0],numbersArray[1])[0], numbersArray[2])[0];
  // console.log('this is from arraySummed: ' + arraySummed);
  var arraySentence = numbersArray[0] + ',' + numbersArray[1] + ',' + numbersArray[2] + ' was passed in as an array of numbers, and ' + arraySummed + ' is their sum.';
  // console.log(arraySentence);
  return [arraySummed, arraySentence];
}

sumArray(testArray);

// Here is the test for sumArray(); uncomment it to run it. which I did.

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
     Write a function called multiplyArray() that...
TODO:   takes an array of numbers as its argument and...
TODO:   returns an array whose...
     TODO: first element is the product of those numbers, and...
     TODO: the second element is a string that EXACTLY follows this example and uses the values that were input into
           the function:
                "The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  var arrayMultiplied = multiply(multiply(multArr[0],multArr[1])[0], multArr[2])[0];
  // console.log('here is arrayMultiplied ' + arrayMultiplied);
  var multiplyArraySentence = 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + arrayMultiplied + '.';
  // console.log('here is multiplyArraySentence ' + multiplyArraySentence);
  return [arrayMultiplied, multiplyArraySentence];
}

var arrayToMultiply = [2,3,4];

multiplyArray(arrayToMultiply);

// Here is the test for multiplyArray(); uncomment it to run it

testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
