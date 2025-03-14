// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression and show the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Evaluate the expression entered in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
