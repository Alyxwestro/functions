// You can put your individual, DOM-specific logic here.
window.stateCallback = () => {
	console.log('Something changed!')
}

// QUOTE SLIDING TEXT
// QUOTE SLIDING TEXT
// QUOTE SLIDING TEXT
document.addEventListener('DOMContentLoaded', function() {
    const inputBoxes = document.querySelectorAll('input[type="text"]');
    const scrollingText = document.getElementById('scrolling-text');

    inputBoxes.forEach(inputBox => {
        inputBox.addEventListener('input', function() {
            // Update the text content of the scrolling-text div with the input value
            scrollingText.textContent = getInputText();
        });
    });

    function getInputText() {
        // Concatenate the values of all input boxes
        let inputText = '';
        inputBoxes.forEach(inputBox => {
            inputText += inputBox.value + ' ';
        });
        return inputText.trim(); // Trim any leading or trailing spaces
    }
});
