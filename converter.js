var field = document.getElementById("field");
var reset = document.getElementById("reset")
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var fah = document.getElementById("fahrenheit");
var cel = document.getElementById("celsius");
var finalAnswer = document.getElementById("converted-temp");


reset.onclick = function () {
	field.value = field.defaultValue;
};



function toCelsius () {
	// (F - 32) / 1.8
	var numberToConvert = field.value;
	var result = (numberToConvert - 32) / 1.8;
	writeToDom(result, 'C');
}

function toFahrenheit () {
	// (C * 1.8) + 32
	var numberToConvert = field.value;
	var result = (numberToConvert * 1.8) + 32;
	writeToDom(result, 'F');
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	// Check which radio button user has selected
	if (fah.checked === true) {
		toFahrenheit();
		// fah.checked = false;
	} else if (cel.checked === true) {
		toCelsius();
		// cel.checked = false;
	}

}

function writeToDom (result, unit) {
	var answer = "";
	if (result > 90 && unit === 'F') {
		answer = '<div class="red-temp">'+ result + '</div>';
	} else if (result > 32 && unit === 'C') {
		answer = '<div class="red-temp">'+ result + '</div>';
	} else if (result < 32 && unit === 'F') {
		answer = '<div class="blue-temp">'+ result + '</div>';
	} else if (result < 0 && unit === 'C') {
		answer = '<div class="blue-temp">'+ result + '</div>';
	} else {
		answer = '<div class="green-temp">'+ result + '</div>';
	}
	finalAnswer.innerHTML = answer;
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);








