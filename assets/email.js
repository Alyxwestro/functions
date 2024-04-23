// document.addEventListener('DOMContentLoaded', function() {
//     const sendEmailButton = document.getElementById('sendEmailButton');

//     sendEmailButton.addEventListener('click', function() {
//         const emailInput = document.getElementById('emailInput').value;
//         const websiteUrl = 'http://example.com'; // Replace 'example.com' with your actual website URL

//         // Construct the mailto link with the email address and website URL in the body
//         const mailtoLink = `mailto:${emailInput}?body=Website URL: ${encodeURIComponent(websiteUrl)}`;

//         // Open the default email client
//         window.location.href = mailtoLink;
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const sendEmailButton = document.getElementById('sendEmailButton');

//     sendEmailButton.addEventListener('click', function() {
//         const emailInput = document.getElementById('emailInput').value;
//         const websiteUrl = window.location.href; // Get the current URL

//         // Construct the mailto link with the email address and website URL in the body
//         const mailtoLink = `mailto:${emailInput}?body=Website URL: ${encodeURIComponent(websiteUrl)}`;

//         // Open the default email client
//         window.location.href = mailtoLink;
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const sendEmailButton = document.getElementById('sendEmailButton');
    const emailInput = document.getElementById('emailInput');

    sendEmailButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const websiteUrl = window.location.href;

        if (email !== '') {
            const mailtoLink = `mailto:${email}?subject=Website URL&body=${encodeURIComponent(websiteUrl)}`;
            window.location.href = mailtoLink;
        }
    });

    // Function to send the URL after 2 minutes
    function sendUrlAfterTwoMinutes() {
        const email = emailInput.value.trim(); // Get the email from the input field
        const websiteUrl = window.location.href;
        
        if (email !== '') {
            const mailtoLink = `mailto:${email}?subject=Website URL&body=${encodeURIComponent(websiteUrl)}`;
            window.location.href = mailtoLink;
        } else {
            console.log("Email address is required.");
        }
    }

    // Call the function to send the URL after 2 minutes
    setTimeout(sendUrlAfterTwoMinutes, 2 * 60 * 1000); // 2 minutes in milliseconds
});

// saveAsPDFButtonsaveAsPDFButton
// saveAsPDFButtonsaveAsPDFButton
// saveAsPDFButtonsaveAsPDFButton

document.getElementById('saveAsPDFButton').addEventListener('click', function() {
    window.print(); // This triggers the print function
});