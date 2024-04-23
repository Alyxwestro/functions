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
            scrollingText.textContent = getInputText();
        });
    });

    function getInputText() {
       
        let inputText = '';
        inputBoxes.forEach(inputBox => {
            inputText += inputBox.value + ' ';
        });
        return inputText.trim(); 
    }
});
