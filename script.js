// Sélectionner tous les éléments étoiles
const stars = document.querySelectorAll('.star');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const dayNumber = document.getElementById('dayNumber');

// Ajouter un événement click à chaque étoile
stars.forEach(star => {
    star.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        
        // Afficher le popup
        popup.classList.add('active');
        dayNumber.textContent = day;
        
        // Plus tard, tu pourras ajouter l'image du cadeau ici :
        // const giftImage = document.createElement('img');
        // giftImage.src = `images/gift-${day}.png`;
        // document.querySelector('.popup-gift').appendChild(giftImage);
    });
});

// Fermer le popup au clic sur le bouton
closePopup.addEventListener('click', function() {
    popup.classList.remove('active');
});

// Fermer le popup au clic en dehors
popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});
