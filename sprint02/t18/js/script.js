'use strict';

function mySort(a, b) {
  if (a % 2 == 0 && b % 2 == 0)
    return a - b;
  else if (a % 2 == 0)
    return -1;
  else if (b % 2 == 0)
    return 1;
  else
    return a - b;
}

function sortEvenOdd(arr) {
  if (arr)
    arr.sort(mySort);
}

// const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// sortEvenOdd(arr);
// alert(arr); 
