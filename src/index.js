import { Person } from 'person.js';

const NAME = "Name";
const AGE = "Age";
let person1 = new Person('Prem', 30);
let person2 = new Person('Raj', 25);
let person3 = new Person('Arv', 2);
let persons = [ person1, person2, person3 ];
let createSimpleTableInBrowser = () => {
	let center = document.createElement("center");
	document.body.appendChild(center);
	let h2 = document.createElement("h3");
	let h2Text = document.createTextNode("Person's Information");
	h2.appendChild(h2Text),
	center.appendChild(h2);
	let table = document.createElement("table");
	let row = table.insertRow(0);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	cell1.innerHTML = NAME;
	cell2.innerHTML = AGE;
	persons.forEach(function(elt, i, array) {
		row = table.insertRow(1);
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell1.innerHTML = elt.getName();
		cell2.innerHTML = elt.getAge();
	})
	center.appendChild(table);

	console.log("Test Successfull !! ");

};

createSimpleTableInBrowser();