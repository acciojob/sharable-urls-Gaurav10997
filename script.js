// your code here
const tag =document.getElementById("tag");
const btn = document.getElementById("button");
var nameInput = document.querySelector('input[name="name"]');
var yearInput = document.querySelector('input[name="year"]');
// function newValue()

btn.addEventListener("click" , function(e){
	e.preventDefault();
	if(nameInput.value && yearInput.value){
		tag.textContent += `/?name=${nameInput.value}&year=${yearInput.value}`
	}else if(nameInput.value ){
		tag.textContent += `/?name=${nameInput.value}`
	}else if(yearInput.value ){
		tag.textContent += `/?name=${yearInput.value}`
	}
	nameInput.value="";
	yearInput.value="";
	

})