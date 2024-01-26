document.addEventListener('DOMContentLoaded', function(){
    var noButton = document.getElementById('no');
    var yesButton = document.getElementById('yes');
    var thankYouCard = document.querySelector('.thankyou-card');
    var card = document.querySelector('.card');
    

    noButton.addEventListener('mouseenter', function() {

        // Get button dimensions
        var buttonWidth = noButton.offsetWidth;
        var buttonHeight = noButton.offsetHeight;
        
        // Generate random positions
        var randomLeft = Math.random() * (1496 - buttonWidth);
        var randomTop = Math.random() * (350 - buttonHeight);
        // Set the new position
        noButton.style.position = 'absolute';
        noButton.style.left = randomLeft + 'px';
        noButton.style.top = randomTop + 'px';
    });

    yesButton.addEventListener('click', function() {
        thankYouCard.style.display = 'block';
        card.style.opacity = '0.5';
    });

});