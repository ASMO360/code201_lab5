'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b){ //eslint-disable-line
  var num = a + b;
  var array = [];
  array.push(num);
  array.push('The sum of ' + a + ' and ' + b + ' is ' + num +'.');
  return array;
}


// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
  var num = a * b;
  var array = [];
  array.push(num);
  array.push('The product of ' + a + ' and ' + b + ' is ' + num +'.');
  return array;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var absum = sum(a,b); //this outputs an array!
  console.log('absum',absum);
  var aB = absum[0];
  console.log('aB :', aB);
  console.log('c',c);
  var totalSum = sum(aB, c);   //this outputs an array!!
  var aOne = totalSum[0];
  var arraySm = [];
  console.log('aOne :', aOne);
  arraySm.push(aOne);
  console.log ('index 1:', arraySm);
  var abproduct = multiply(a,b);  //this outputs an array!!!
  console.log('abproduct:', abproduct);
  var mAb = abproduct[0];
  console.log('mAb', mAb);
  var multiabc = multiply(mAb,c);   // this outputs an array!!
  console.log('multiabc', multiabc)
  var aTwo = multiabc[0];
  console.log('aTwo :', aTwo);
  arraySm.push(aTwo);
  arraySm.push(+ a + ' and ' + b +' and '+ c +' sum to ' + aOne + '.');
  arraySm.push('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + aTwo +'.');
  console.log(arraySm);
  return arraySm;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line
console.log(testArray)

function sumArray(testArray){ //eslint-disable-line
  var absum1 = sum(testArray[0],testArray[1]); //this outputs an array!
  console.log('absum1',absum1);
  var aB1 = absum1[0];
  console.log('aB1 :', aB1);
  console.log('c',testArray[2]);
  var totalSum1 = sum(aB1,testArray[2] );   //this outputs an array!!
  var aOne1 = totalSum1[0];
  console.log('arraySm99 prior to input', arraySm99)
  var arraySm99 = [];
  console.log('totalSum1', totalSum1);
  console.log('aOne1', aOne1);
  console.log('arraySm99', arraySm99);
  arraySm99.push(totalSum1[0]);
  console.log('arraySm99 after first push', arraySm99);
  parseInt(testArray,10);
  arraySm99.push(testArray[0] + ',' + testArray[1] + ','  + testArray[2] + ' was passed in as an array of numbers, and ' + aOne1 + ' is their sum.');
    //arraySm1.push(testArray[0],[1] [2] + ' was passed in as an array of numbers, and ' + aOne1 + ' is their sum.')
  console.log('arraySm99 after last push', arraySm99);
  return arraySm99;
//OUTPUT:  return array[sum of array#] ['2,3,4 was passed in as an array of numbers, and 9 is their sum.']
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  var abmulti2 = multiply(testArray[0],testArray[1]); //this outputs an array!
  console.log('abmulti2',abmulti2);
  var aB2 = abmulti2[0];
  console.log('aB2 :', aB2);
  console.log('c',testArray[2]);
  var totalmulti1 = multiply(aB2,testArray[2] );   //this outputs an array!!
  var aOne2 = totalmulti1[0];
  console.log('arraySm9 prior to input', arraySm9)
  var arraySm9 = [];
  console.log('totalmulti1', totalmulti1);
  console.log('aOne2', aOne2);
  console.log('arraySm9', arraySm9);
  arraySm9.push(totalmulti1[0]);
  console.log('arraySm9 after first push', arraySm9);
  parseInt(testArray,10);
  arraySm9.push('The numbers ' + testArray[0] + ',' + testArray[1] + ','  + testArray[2] + ' have a product of ' + aOne2 + '.');
  console.log('arraySm9 after last push', arraySm9);
  return arraySm9;
  //OUTPUT:  return array[product of array#] ["The numbers 2,3,4 have a product of 24."]
}


// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
