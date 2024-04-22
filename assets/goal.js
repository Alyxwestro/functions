document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('main');
    const inputBoxes = document.querySelectorAll('input[type="text"]');

    inputBoxes.forEach((inputBox, index) => {
        let boxCount = 0;
        let inputValue = ''; // Variable to store input value

        inputBox.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && boxCount < 5) {
                inputValue = inputBox.value.trim(); // Store input value
                if (inputValue !== '') {
                    const newOutputBox = document.createElement('div');
                    newOutputBox.className = `outputBox outputBox-${index + 1}`;
                    newOutputBox.textContent = inputValue;
                    mainElement.appendChild(newOutputBox);
                    inputBox.value = inputValue; // Set input box value back to stored value
                    boxCount++;
                    window.scrollTo(0, document.body.scrollHeight);
                    
                    // Save the styles of the new output box
                    saveOutputBoxStyles(newOutputBox.classList, newOutputBox.style);
                }
            }
        });

        // Add event listener to Enter button
        const enterButton = inputBox.parentElement.querySelector('button');
        enterButton.addEventListener('click', () => {
            if (boxCount < 5) {
                inputValue = inputBox.value.trim(); // Store input value
                if (inputValue !== '') {
                    const newOutputBox = document.createElement('div');
                    newOutputBox.className = `outputBox outputBox-${index + 1}`;
                    newOutputBox.textContent = inputValue;
                    mainElement.appendChild(newOutputBox);
                    inputBox.value = inputValue; // Set input box value back to stored value
                    boxCount++;
                    window.scrollTo(0, document.body.scrollHeight);
                    
                    // Save the styles of the new output box
                    saveOutputBoxStyles(newOutputBox.classList, newOutputBox.style);
                }
            }
        });
    });

    // Function to save the styles of the output box to local storage
    function saveOutputBoxStyles(classList, style) {
        // Convert styles to a JSON object
        const stylesObj = {};
        for (let i = 0; i < style.length; i++) {
            const prop = style[i];
            stylesObj[prop] = style[prop];
        }

        // Encode the JSON object to a string
        const stylesString = JSON.stringify(stylesObj);

        // Save styles using classList as key
        localStorage.setItem(classList[1], stylesString);
    }

    // Function to retrieve and apply output box styles from local storage
    function applyOutputBoxStyles() {
        const outputBoxes = document.querySelectorAll('.outputBox');
        outputBoxes.forEach(outputBox => {
            const stylesString = localStorage.getItem(outputBox.classList[1]);
            if (stylesString) {
                // Decode the styles string back to a JSON object
                const stylesObj = JSON.parse(stylesString);
                
                // Apply styles from the JSON object
                for (const prop in stylesObj) {
                    outputBox.style[prop] = stylesObj[prop];
                }
            }
        });
    }

    // Apply output box styles when the page loads
    applyOutputBoxStyles();
});

