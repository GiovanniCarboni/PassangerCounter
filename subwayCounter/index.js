// document.getElementById("count-el").innerText = 5;
/*
let firstGroup = 5;
let secondGroup = 7;

let count = firstGroup + secondGroup; // here we are storing the number of the passangers that entered

console.log(count);
*/

/* this calculates my dog age! */
/*
let myAge = 24;
let humanDogRatio = 7;

let myDogAge = Math.floor(myAge / humanDogRatio);

console.log(myDogAge)
*/

let countEl = document.getElementById("count-el");
let countGr = document.getElementById("saved-groups");

let count = 0;

function increment() {
	count++;
	countEl.innerText = count;
};

let savedGroups = [];

function save() {
	savedGroups.shift();
	savedGroups.unshift(count);
	countGr.innerText = `${savedGroups} people entered last.`;
}

