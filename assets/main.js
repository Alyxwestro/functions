// document.addEventListener('DOMContentLoaded', function() {
//     const inputBox = document.getElementById('inputBox');
//     const outputBox = document.getElementById('outputBox');

//     inputBox.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             // If "Enter" key is pressed, update the output box content
//             outputBox.textContent = inputBox.value;
//             // Clear the input box after displaying the value
//             inputBox.value = '';
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const inputBox = document.getElementById('inputBox');
//     const mainElement = document.querySelector('main');

//     inputBox.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             // Create a new output box
//             const newOutputBox = document.createElement('div');
//             newOutputBox.className = 'outputBox';
//             newOutputBox.textContent = inputBox.value;

//             // Append the new output box to the main element
//             mainElement.appendChild(newOutputBox);

//             // Clear the input box after displaying the value
//             inputBox.value = '';

//             // Scroll to the bottom of the page to show the new output box
//             window.scrollTo(0, document.body.scrollHeight);
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const mainElement = document.querySelector('main');
    let boxCount = 0; // Counter to track the number of output boxes

    inputBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            // Increment the boxCount to get a unique value for each output box
            boxCount++;

            // Create a new output box
            const newOutputBox = document.createElement('div');
            newOutputBox.className = 'outputBox'; // Common class for styling
            newOutputBox.classList.add(`outputBox-${boxCount}`); // Unique class for each output box
            newOutputBox.textContent = inputBox.value;

            // Append the new output box to the main element
            mainElement.appendChild(newOutputBox);

            // Clear the input box after displaying the value
            inputBox.value = '';

            // Scroll to the bottom of the page to show the new output box
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
});

