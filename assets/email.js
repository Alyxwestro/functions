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

    function sendUrlAfterTwoMinutes() {
        const email = emailInput.value.trim(); 
        const websiteUrl = window.location.href;
        
        if (email !== '') {
            const mailtoLink = `mailto:${email}?subject=Website URL&body=${encodeURIComponent(websiteUrl)}`;
            window.location.href = mailtoLink;
        } else {
            console.log("Email address is required.");
        }
    }

    setTimeout(sendUrlAfterTwoMinutes, 2 * 60 * 1000); 
});

// saveAsPDFButtonsaveAsPDFButton
// saveAsPDFButtonsaveAsPDFButton
// saveAsPDFButtonsaveAsPDFButton

document.getElementById('saveAsPDFButton').addEventListener('click', function() {
    window.print(); 
});