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

document.addEventListener('DOMContentLoaded', function() {
    const sendEmailButton = document.getElementById('sendEmailButton');

    sendEmailButton.addEventListener('click', function() {
        const emailInput = document.getElementById('emailInput').value;
        const websiteUrl = window.location.href; // Get the current URL

        // Construct the mailto link with the email address and website URL in the body
        const mailtoLink = `mailto:${emailInput}?body=Website URL: ${encodeURIComponent(websiteUrl)}`;

        // Open the default email client
        window.location.href = mailtoLink;
    });
});