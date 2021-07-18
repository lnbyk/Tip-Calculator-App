let tipBtn = document.querySelectorAll('.tip-text');
let tipPercentage = document.querySelectorAll('.tip-percentage');
let resetBtn = document.querySelector('.reset');
let billInput = document.getElementById('bill-input');
let peopleInput = document.getElementById('people-input');
let customTipInput = document.querySelector('.custom-tip');
let activeBtn = document.querySelector('.active');
let errorText = document.querySelector('.error-text');

// Calculate the values of the tips
function calculate() {
	const principal = parseFloat(billInput.value);
	const percent = selectedTip / 100;
	const people = parseFloat(peopleInput.value);
	const amount = (principal * percent) / people;
	const total = principal / people + amount;
	
	tipPerson.textContent = '$' + amount.toFixed(2);
	totalPerson.textContent = '$' + total.toFixed(2);
	return;
}

// Error Validation
peopleInput.addEventListener('input', (e) => {
	const currentInput = e.target.value;
	if (currentInput == 0) {
		peopleInput.classList.add('error');
		errorText.style.display = 'block';
	} else {
		peopleInput.classList.remove('error');
		errorText.style.display = 'none';
	}

	calculate();
});

// Grabbing the value from tip % btn
tipPercentage.forEach((input) => {
	input.addEventListener('click', (e) => {
		selectedTip = parseFloat(e.target.textContent);
	});
});

// Grabs the input of the custom tip value
customTipInput.addEventListener('input', (e) => {
	const customTip = e.target.value;
	selectedTip = parseFloat(customTip);
	calculate();
});

// Remove the active class when the custom input has been clicked
customTipInput.addEventListener('click', () => {
	activeBtn.classList.remove('active');
});

// Setting the values for the calculated numbers
let tipPerson = document.querySelector('.tip-person');
let totalPerson = document.querySelector('.total-person');
tipPerson.textContent = '$0.00';
totalPerson.textContent = '$0.00';

function clearContent() {
	// Clear input values
	billInput.value = '';
	peopleInput.value = '';
	customTipInput.value = '';

	// Clear calculated values
	tipPerson.textContent = '$0.00';
	totalPerson.textContent = '$0.00';

	// Clear input validation
	peopleInput.classList.remove('error');
	errorText.style.display = 'none';

	// Remove the active class on tip button
	activeBtn.classList.remove('active')
}

resetBtn.addEventListener('click', clearContent);

// Lopps through the Select Tips % buttons and add/removes the active class
tipBtn.forEach((tip) => {
	tip.addEventListener('click', () => {
		// removes the original active class from element
		activeBtn.classList.remove('active');
		// adds the class on the button that has been clicked
		tip.classList.add('active');
		// making activeBtn equal to tipBtn allows you to add and remove the active class
		activeBtn = tip;
	});
});
