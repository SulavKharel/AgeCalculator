document.addEventListener('DOMContentLoaded', function(){
    var noButton = document.getElementById('no');
    var yesButton = document.getElementById('yes');
    var thankYouCard = document.querySelector('.thankyou-card');
    var card = document.querySelector('.card');
    

    noButton.addEventListener('mouseenter', function() {
        // Generate random positions
        var randomLeft = Math.random() * (window.innerWidth - noButton.offsetWidth);
        var randomTop = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
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