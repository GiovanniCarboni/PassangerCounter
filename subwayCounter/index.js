

let countEl = document.getElementById("count-el");
// let countGr = document.getElementById("saved-groups");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
	count++;
	countEl.innerText = count;
};

let savedGroups = [];

/*function save() {
	savedGroups.shift();
	savedGroups.unshift(count);
	countGr.innerText = `${savedGroups} people entered last.`;
}*/

function save() {
	// let previousEntries = " " + count + "; ";
	let previousEntries = ` ${count}; `;
	saveEl.innerText += previousEntries;
}