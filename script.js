const form = document.getElementById('form');
const _name = document.getElementById('_name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const _nameValue = _name.value.trim();
	const numberValue = number.value.trim();
	const emailValue = email.value.trim();
	const enquiryValue = enquiry.value.trim();
	
	if(_nameValue === '') {
		setErrorFor(_name, 'Name cannot be blank');
	} else {
		setSuccessFor(_name);
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'Input number');
	} else {
		setSuccessFor(number);
	}
		
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(number);
	}
	
	if(enquiryValue === '') {
		setErrorFor(enquiry, 'enquiry cannot be blank');
	} else if (enquiry, 'Enquiry cannot be blank'){
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}






const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

