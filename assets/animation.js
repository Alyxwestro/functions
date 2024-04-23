document.addEventListener('DOMContentLoaded', function() {
    var animationsCount = 0;
  
    function redirectToLandingPage() {
        window.location.href = 'landingpage.html';
    }
   
    function checkAllAnimationsFinished() {
        animationsCount++;
        if (animationsCount === 3) { 
            redirectToLandingPage();
        }
    }

    document.querySelector('.fade').addEventListener('animationend', checkAllAnimationsFinished);
    document.querySelector('.size').addEventListener('animationend', checkAllAnimationsFinished);
    document.querySelector('.intro').addEventListener('animationend', function(event) {
        
        if (event.animationName === 'moveUp') {
            checkAllAnimationsFinished(); 
        }
    });
});