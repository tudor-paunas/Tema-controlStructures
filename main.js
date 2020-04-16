// 1.display in the console the numbers from 1 to 20

var i = 1;

while (i <= 20) {
  console.log(i);

  i = i + 1;
}

console.log("--------------------"); //brake

// 2.display in the console the odd numbers from 1 to 20

i = 2;

while (i <= 20) {
  console.log(i);

  i = i + 2;
}

console.log("---------------------"); //brake

// 3.compute the sum of the elements of an array and display it in the console

var array = [10, 5, 8, 4, 7];

console.log(array[0] + array[1] + array[2] + array[3] + array[4]);

function sumOfElements(elements) {
  var i = 0;
  var sum = 0;
  while (i < elements.length) {
    sum = sum + elements[i];
    i++;
  }
  return sum;
}

console.log(sumOfElements(array));

console.log("---------------"); //brake

// 4. compute the maximum of the elements of an array and display it in the console

console.log(Math.max(...array));

console.log("-----------------"); //brake

// 5. compute how many times a certain element appears in an array

array = [5, 8, 7, 10, 5, 18, 20, 10, 15, 5];

function elementsOccurrence(elements, array) {
  var occurrence = 0;
  var i = 0;
  while (i < array.length) {
    if (array[i] === elements) {
      occurrence = occurrence + 1;
    }
    i++;
  }
  return occurrence;
}

console.log(elementsOccurrence(5, array));
