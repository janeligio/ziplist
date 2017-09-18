/*
Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a function called zipListTheSimpleWay that does the same thing using Underscore.
*/

function zipList(list1, list2) {
  let arr = [];
  for(let i = 0; i < list1.length; i++){
    arr.push(list1[i]);
    arr.push(list2[i]);
  }
  return arr;

}

let myarr = [1, 2, 3];
let myarr2 = ["a", "b", "c"];
console.log(zipList(myarr, myarr2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(myarr, myarr2));
