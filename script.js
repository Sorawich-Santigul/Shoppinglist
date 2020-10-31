var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	const btn = document.createElement("button");
	btn.innerText="delete";
    btn.classList.add("delete");
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossdeleteAfterclick(el) {
	if (el.classList.contains("delete")){
		el.parentElement.remove();
	}else{
		el.classList.toggle("done");
	}
}

/*function Deletebtn(el){
	if el.classList.contain("delete"){
		el.parentelement.remove();
	}
}*/
input.addEventListener("click",crossdeleteAfterclick);
input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", (e)=>crossdeleteAfterclick(e.target));

/*ul.addEventListener("click", (e)=>Deletebtn(e.target));*/


