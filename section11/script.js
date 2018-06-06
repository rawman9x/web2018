var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.classList.add('del');
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = '';
	// listen event delete button
	var deleteBtn = document.getElementsByClassName('del');
	for(let j=0; j<deleteBtn.length; j++) {
		let delBtn = deleteBtn[j];		
		delBtn.addEventListener('click', function(event) {	
			delBtn.parentElement.remove();
		});
	}
}

function addListAfterClick() {
	var currentLi = document.querySelectorAll("li");
	if (inputLength() && currentLi.length < 10 && currentLi.length > 0) {
		createListElement();

	}
}

function addListAfterKeypress(event) {
	var currentLi = document.querySelectorAll("li");
	if (inputLength() && currentLi.length < 10 && currentLi.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
// Toggle class .done when click li
for (let i=0; i<li.length; i++) {
	let myLi = li[i];
	myLi.addEventListener('click', function(event) {
		myLi.classList.toggle("done");
	});
}