 // JavaScript for redirecting to the landing page after animation
//  document.addEventListener('DOMContentLoaded', function() {
//     var animationsCount = 0;

//     // Function to redirect to the landing page
//     function redirectToLandingPage() {
//         window.location.href = 'landingpage.html';
//     }

//     // Function to check if all animations are finished
//     function checkAllAnimationsFinished() {
//         animationsCount++;
//         if (animationsCount === 3) { // Assuming there are 3 animations
//             redirectToLandingPage();
//         }
//     }

//     // Listen for animation end events on fade, size, and moveUp elements
//     document.querySelector('.fade').addEventListener('animationend', checkAllAnimationsFinished);
//     document.querySelector('.size').addEventListener('animationend', checkAllAnimationsFinished);
//     document.querySelector('.intro').addEventListener('animationend', function(event) {
//         // Check if the animation that ended is the moveUp animation
//         if (event.animationName === 'moveUp') {
//             checkAllAnimationsFinished(); // Check for completion after moveUp animation
//         }
//     });
// });