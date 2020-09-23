'use strict';

function firstElements(arr, n) {
  if (n > 0)
    return arr.slice(0, n);
  else
    return new Array;
}

// var  heroes= ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
// alert(firstElements(heroes, 5));
