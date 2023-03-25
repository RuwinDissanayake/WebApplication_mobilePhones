let popupLogin = document.getElementById("popup-form");
let closeButton = document.getElementById("close-btn");
let buyNow = document.getElementById("buy-now");

buyNow.addEventListener("click", function(){
	

	popupLogin.classList.add("anyname");
		
})

function numberOnly(input){
	
	let num = /[^0-9]/gi;
	input.value = input.value.replace(num,"");
}

let name = document.getElementById("name");
let email = document.getElementById("email");

let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");

function validateName(){
	if (name.value == ""){
		name.style.border = "1px solid red";
		nameError.style.display = "block";
		name.focus();
		return false;
	}
	else{
		name.style.border = "";
		nameError.style.display = "none";
		return true;
	}
}

function validateEmail(){
	if (email.value == ""){
		email.style.border = "1px solid red";
		emailError.style.display = "block";
		email.focus();
		return false;
	}
	else{
		email.style.border = "";
		emailError.style.display = "none";
		return true;
	}
}

let popup = document.getElementById("popup-message");
let closePopup = document.getElementById("ok-btn");

let quantityList = document.getElementById("quantity-value");
let quantity = document.getElementById("quantity-ordered");
let fullName = document.getElementById("name").value;
let lastName = document.getElementById("user-name");

function getSelectedValue( selectList ) {
	return selectList[ selectList.selectedIndex ].value;
}

function prepareOrderSummary(){
	quantityValue = getSelectedValue(quantityList);
	quantity.innerHTML = quantityValue;
	let fullName = document.getElementById("name").value;
	names = fullName.split(" ");
	lastName.innerHTML = names[names.length-1];
	document.getElementById("total-bill").innerHTML = parseInt(document.getElementById("price").innerHTML) * parseInt(quantityValue);
	document.getElementById("summary-email").innerHTML = email.value;
}	

function openPopup(){
	popup.classList.add("open-popup");
}

function resetAll(){
	document.getElementById("quantity-value").value = "1";
	name.value = "";
	email.value = "";
	let styles = {
		"width": "340px",
		"height": "400px",
		"align-items": "center",
		"margin-left": "95px"
	};
}

function validated(){
	validatedName = validateName();
	validatedEmail = validateEmail();
	
	if (validatedName == false){
		return false;
	}
	if (validatedEmail == false){
		return false;
	}
	
	
	if ((validatedName == true)&&(validatedEmail == true)){
		
		popupLogin.classList.remove("anyname");
		prepareOrderSummary();
		openPopup();
		closePopup.addEventListener("click", function(){
			popup.classList.remove("open-popup");
			resetAll();
		})
	}
	
	return false;
}