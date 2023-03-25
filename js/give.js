const amount = document.getElementById("amount");

amount.addEventListener("keydown", function(event) {
	// console.log(event.key);
	// console.log(event.key.length);

	// Return if user presses ctrl or alt so the user isn't prevented from using keyboard shortcuts
	// Return if input is not a string
	if(event.ctrlKey || event.altKey || typeof(event.key) !== 'string') {// || event.key.length !== 1) {
		return;
	}

	let amountArr = Array.from(amount.value);

	if (!event.shiftKey) {
		switch(event.key) {
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				// If the input box is empty, populate it with 0's
				if (amount.value == "") {
					amount.value = "0.00";
					amountArr = Array.from(amount.value);
				}

				// If the first character is a 0, splice it out
				if (amount.value[0] == "0") {
					amountArr.splice(0, 1);
					amount.value = amountArr.join("");
				}

				// Shifts the decimal point right
				for (let i = 0; i < amount.value.length; i ++) {
					if (amount.value[i] == ".") {
						amountArr.splice(i, 1);
						amountArr.splice(i + 1, 0, ".");
						amount.value = amountArr.join("");
						i = amount.value.length;
					}
				}
			break;
			case "Backspace":
				// Shifts the decimal point left
				for (let i = 0; i < amount.value.length; i ++) {
					if (amount.value[i] == ".") {
						console.log(i);
						amountArr.splice(i, 1);
						amountArr.splice(i - 1, 0, ".");
						amount.value = amountArr.join("");
						i = amount.value.length;
					}
				}
				
				if (amount.value[0] == ".") {
					amountArr.splice(0, 0, "0");
					amount.value = amountArr.join("");
				}
			break;
			default:
				event.preventDefault();
		}
	}
});
