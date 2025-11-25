// Sélectionner tous les éléments étoiles
const stars = document.querySelectorAll('.star');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const popupGift = document.querySelector('.popup-gift');

// Textes des cadeaux
const gifts = {
    1: "Pleins de bêtises pour manger à Metz",
    2: "Bon pour une soirée coquillettes",
    3: "Massage de 30 minutes par moi",
    4: "Bon pour une soirée \"IT takes Two\"",
    5: "Soirée chocolat chaud, Pop Corn et film de ton choix",
    6: "Bon pour un petit déjeuner au lit",
    7: "Encore des bêtises pour dans le train",
    8: "Un livre sur les randonnées",
    9: "Un appareil photo jetable comme ça tu peux prendre autant de photos que tu veux",
    10: "Une petite broderie",
    11: "Bon pour une journée où je ne touche pas à mon téléphone",
    12: "Bon pour une soirée où tu m'apprends à jouer à LoL",
    13: "Carte cadeau Steam 10-20€",
    14: "Livre de rando pour être un vrai randonneur",
    15: "Soirée Pépé Chicken Tenders",
    16: "Une autre soirée chocolat chaud, films & pop corn",
    17: "Bon pour une rando surprise",
    18: "Brunch maison pancake, bacon, etc",
    19: "Minecraft date night",
    20: "Massage tout nu",
    21: "Un aller retour en train Paris-Metz",
    22: "Soirée/Après-midi gaming",
    23: "Un beau bouquet pour une belle princesse",
    24: "Une super gourde et d'autres cadeaux à découvrir plus tard"
};

// Ajouter un événement click à chaque étoile
stars.forEach(star => {
    star.addEventListener('click', function() {
        const day = parseInt(this.getAttribute('data-day'));
        const giftText = gifts[day];
        
        // Vider le contenu précédent
        popupGift.innerHTML = '';
        
        // Créer le container de la carte
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card';
        
        // Créer le texte
        const giftTextElement = document.createElement('p');
        giftTextElement.className = 'gift-text';
        giftTextElement.textContent = giftText;
        
        // Ajouter le texte à la carte
        giftCard.appendChild(giftTextElement);
        
        // Ajouter la carte au popup
        popupGift.appendChild(giftCard);
        
        // Afficher le popup
        popup.classList.add('active');
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

// Fermer avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
        popup.classList.remove('active');
    }
});

// EFFET NEIGE
function createSnowflakes() {
    const snowflakeChars = ['❄', '❅', '❆', '✻', '✼', '❉'];
    const snowContainer = document.body;
    
    // Créer 50 flocons de neige
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        
        // Position aléatoire
        snowflake.style.left = Math.random() * 100 + '%';
        
        // Taille aléatoire
        snowflake.style.fontSize = (Math.random() * 1.5 + 0.5) + 'em';
        
        // Délai aléatoire
        snowflake.style.animationDelay = Math.random() * 10 + 's';
        
        // Durée aléatoire
        snowflake.style.animationDuration = (Math.random() * 10 + 5) + 's';
        
        snowContainer.appendChild(snowflake);
    }
}

// Lancer la neige quand la page est chargée
window.addEventListener('load', createSnowflakes);

