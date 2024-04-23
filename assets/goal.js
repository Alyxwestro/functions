document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('main');
    const inputBoxes = document.querySelectorAll('input[type="text"]');

    inputBoxes.forEach((inputBox, index) => {
        let boxCount = 0;
        let inputValue = ''; 

        inputBox.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && boxCount < 5) {
                inputValue = inputBox.value.trim(); 
                if (inputValue !== '') {
                    const newOutputBox = document.createElement('div');
                    newOutputBox.className = `outputBox outputBox-${index + 1}`;
                    newOutputBox.textContent = inputValue;
                    mainElement.appendChild(newOutputBox);
                    inputBox.value = inputValue; 
                    boxCount++;
                    window.scrollTo(0, document.body.scrollHeight);
                           
                    saveOutputBoxStyles(newOutputBox.classList, newOutputBox.style);
                }
            }
        });

        const enterButton = inputBox.parentElement.querySelector('button');
        enterButton.addEventListener('click', () => {
            if (boxCount < 5) {
                inputValue = inputBox.value.trim(); 
                if (inputValue !== '') {
                    const newOutputBox = document.createElement('div');
                    newOutputBox.className = `outputBox outputBox-${index + 1}`;
                    newOutputBox.textContent = inputValue;
                    mainElement.appendChild(newOutputBox);
                    inputBox.value = inputValue; 
                    boxCount++;
                    window.scrollTo(0, document.body.scrollHeight);
                    
                    saveOutputBoxStyles(newOutputBox.classList, newOutputBox.style);
                }
            }
        });
    });

    function saveOutputBoxStyles(classList, style) {
        
        const stylesObj = {};
        for (let i = 0; i < style.length; i++) {
            const prop = style[i];
            stylesObj[prop] = style[prop];
        }

        const stylesString = JSON.stringify(stylesObj);

        localStorage.setItem(classList[1], stylesString);
    }

    function applyOutputBoxStyles() {
        const outputBoxes = document.querySelectorAll('.outputBox');
        outputBoxes.forEach(outputBox => {
            const stylesString = localStorage.getItem(outputBox.classList[1]);
            if (stylesString) {
                
                const stylesObj = JSON.parse(stylesString);
               
                for (const prop in stylesObj) {
                    outputBox.style[prop] = stylesObj[prop];
                }
            }
        });
    }

    applyOutputBoxStyles();
});

