document.addEventListener('DOMContentLoaded', function() {
    
    const dropdownContainers = document.querySelectorAll('.dropdown-content-1');

    
    const updateDropdownContent = (container) => {
        
        const data = {};

     
        container.querySelectorAll('input').forEach(input => {
            data[input.name] = input.value;
        });

        
        const outputBoxStyles = {};
        container.querySelectorAll('.outputBox').forEach(outputBox => {
            outputBoxStyles[outputBox.classList[1]] = outputBox.style.cssText;
        });

        
        localStorage.setItem(`${container.id}_data`, JSON.stringify(data));
        localStorage.setItem(`${container.id}_outputBoxStyles`, JSON.stringify(outputBoxStyles));

        
        const params = new URLSearchParams(data);

       
        window.history.replaceState(null, null, '?' + params.toString());

       
        window.stateCallback?.();
    };

    
    const updateDropdownFromStorage = (container) => {
        
        const storedData = localStorage.getItem(`${container.id}_data`);
        const data = storedData ? JSON.parse(storedData) : {};

       
        container.querySelectorAll('input').forEach(input => {
            input.value = data[input.name] || '';
        });

        const storedOutputBoxStyles = localStorage.getItem(`${container.id}_outputBoxStyles`);
        const outputBoxStyles = storedOutputBoxStyles ? JSON.parse(storedOutputBoxStyles) : {};

        Object.keys(outputBoxStyles).forEach(outputBoxClass => {
            container.querySelectorAll(`.${outputBoxClass}`).forEach(outputBox => {
                outputBox.style.cssText = outputBoxStyles[outputBoxClass];
            });
        });

        
        window.stateCallback?.();
    };

    
    dropdownContainers.forEach(container => {
       
        updateDropdownFromStorage(container);

        container.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                updateDropdownContent(container);
            });
        });
    });
});
