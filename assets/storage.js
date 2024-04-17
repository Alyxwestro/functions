// // Find your div element containing the goal dropdown
// const divElement = document.querySelector('.goal-dropdown');

// // Function to match the div content to URL/stored params
// const updateDivContent = () => {
//     // Get the input values
//     const goalInput = divElement.querySelector('#inputBox').value;
//     const calendarInput = divElement.querySelector('#calendar').value;

//     // Construct URL params string
//     const params = new URLSearchParams({
//         goal: goalInput,
//         calendar: calendarInput
//     });

//     // Update the URL with the params
//     window.history.replaceState(null, null, '?' + params.toString());

//     // Store the params in localStorage
//     localStorage.setItem('goal', goalInput);
//     localStorage.setItem('calendar', calendarInput);

//     // And a callback if needed
//     window.stateCallback?.();
// }

// // Function to update the div content from URL/stored params
// const updateDivFromParams = () => {
//     const urlParams = new URLSearchParams(window.location.search);

//     // Update the div content based on URL params
//     const goalInput = urlParams.get('goal');
//     const calendarInput = urlParams.get('calendar');
//     divElement.querySelector('#inputBox').value = goalInput || '';
//     divElement.querySelector('#calendar').value = calendarInput || '';

//     // And store the params in localStorage
//     localStorage.setItem('goal', goalInput || '');
//     localStorage.setItem('calendar', calendarInput || '');

//     // And a callback if needed
//     window.stateCallback?.();
// }

// // Run on page load
// document.addEventListener('DOMContentLoaded', function() {
//     // Update div content from URL/stored params
//     if (window.location.search) {
//         updateDivFromParams();
//     } else if (localStorage.getItem('goal') || localStorage.getItem('calendar')) {
//         updateDivFromParams();
//     }

//     // Update URL params and localStorage on input change
//     divElement.querySelectorAll('input').forEach(input => {
//         input.addEventListener('input', updateDivContent);
//     });
// });


// Run on page load
document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown containers
    const dropdownContainers = document.querySelectorAll('.dropdown-content-1');

    // Function to update the URL parameters and localStorage for a specific dropdown container
    const updateDropdownContent = (container) => {
        // Initialize an empty object to store input values and styles
        const data = {};

        // Get all input values within the container
        container.querySelectorAll('input').forEach(input => {
            data[input.name] = input.value;
        });

        // Get all output box styles within the container
        const outputBoxStyles = {};
        container.querySelectorAll('.outputBox').forEach(outputBox => {
            outputBoxStyles[outputBox.classList[1]] = outputBox.style.cssText;
        });

        // Store the input values and output box styles in localStorage for this container
        localStorage.setItem(`${container.id}_data`, JSON.stringify(data));
        localStorage.setItem(`${container.id}_outputBoxStyles`, JSON.stringify(outputBoxStyles));

        // Construct URL params string for this container
        const params = new URLSearchParams(data);

        // Update the URL with the params for this container
        window.history.replaceState(null, null, '?' + params.toString());

        // Execute a callback if needed
        window.stateCallback?.();
    };

    // Function to update the input values and output box styles within a specific dropdown container from localStorage
    const updateDropdownFromStorage = (container) => {
        // Retrieve the input values from localStorage for this container
        const storedData = localStorage.getItem(`${container.id}_data`);
        const data = storedData ? JSON.parse(storedData) : {};

        // Update the input values within the container
        container.querySelectorAll('input').forEach(input => {
            input.value = data[input.name] || '';
        });

        // Retrieve the output box styles from localStorage for this container
        const storedOutputBoxStyles = localStorage.getItem(`${container.id}_outputBoxStyles`);
        const outputBoxStyles = storedOutputBoxStyles ? JSON.parse(storedOutputBoxStyles) : {};

        // Update the output box styles within the container
        Object.keys(outputBoxStyles).forEach(outputBoxClass => {
            container.querySelectorAll(`.${outputBoxClass}`).forEach(outputBox => {
                outputBox.style.cssText = outputBoxStyles[outputBoxClass];
            });
        });

        // Execute a callback if needed
        window.stateCallback?.();
    };

    // Iterate over each dropdown container
    dropdownContainers.forEach(container => {
        // Update div content from localStorage for each container
        updateDropdownFromStorage(container);

        // Update URL params and localStorage on input change for each container
        container.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                updateDropdownContent(container);
            });
        });
    });
});
