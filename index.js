'use strict';
var runningCurrency = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
var availableNotes = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var totalNotes = [runningCurrency, availableNotes];
var totalAmt = 0;
const argumentList = process.argv;
const addThese = argumentList.slice(2, argumentList.length);
const userInput = Number(addThese);
var totalAmt = getTotalCount();

function getTotalCount() {
	var total = 0;
	runningCurrency.forEach((item1, index1) => {
		availableNotes.forEach((item2, index2) => {
			if(index1 === index2) {
			total = total + (item1 * item2);
			}
		},);
	},);
	return total;
}
if(userInput <= totalAmt) {
	var note = getNoteCount(userInput);
	console.log(JSON.stringify(note));
} else {
	console.log("OOPS Avaialbel amount is less than your demand");
}

function getNoteCount(userInput) {
  runningCurrency = runningCurrency.reverse();
  let curencywithdraw = {};

  runningCurrency.forEach(el => {
    curencywithdraw[el] = Math.floor(userInput / el);
    userInput = userInput - curencywithdraw[el] * el;
  });
  return curencywithdraw;
}

