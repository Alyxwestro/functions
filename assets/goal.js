document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const mainElement = document.querySelector('main');
    let boxCount = 0; // Counter to track the number of output boxes

    inputBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && boxCount < 5) { // Check if Enter key is pressed and box count is less than 5
            // Create a new output box
            const newOutputBox = document.createElement('div');
            newOutputBox.className = 'outputBox';
            newOutputBox.classList.add(`outputBox-${boxCount}`); // Common class for styling
            newOutputBox.textContent = inputBox.value;

            // Append the new output box to the main element
            mainElement.appendChild(newOutputBox);

            // Clear the input box after displaying the value
            inputBox.value = '';

            // Increment the boxCount
            boxCount++;

            // Scroll to the bottom of the page to show the new output box
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
});