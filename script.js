// Contenu personnalisé pour chaque jour
const adventContent = {
    1: {
        title: "🎅 Jour 1",
        content: "Bienvenue dans ton calendrier de l'Avent ! <br><br>Un premier message personnalisé pour toi 💝",
        image: "" // Optionnel : ajoute une URL d'image
    },
    2: {
        title: "❄️ Jour 2",
        content: "Un souvenir spécial de nous deux...",
        image: ""
    },
    // Ajoute les jours 3 à 24 ici...
    24: {
        title: "🎄 Jour 24 - Joyeux Noël !",
        content: "Le grand jour est arrivé ! 🎁✨",
        image: ""
    }
};

// Génération du calendrier
function createCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    
    // Mélange aléatoire des numéros (optionnel)
    let days = Array.from({length: 24}, (_, i) => i + 1);
    days = shuffleArray(days);
    
    days.forEach(day => {
        const door = document.createElement('div');
        door.className = 'door';
        door.innerHTML = `<div class="door-number">${day}</div>`;
        
        // Vérifier si le jour est déjà déverrouillé
        const unlockDate = new Date(2025, 11, day); // Décembre = mois 11
        
        if (today >= unlockDate || localStorage.getItem(`day-${day}-opened`)) {
            door.classList.add('opened');
        } else {
            door.classList.add('locked');
        }
        
        door.addEventListener('click', () => openDoor(day, door));
        calendar.appendChild(door);
    });
}

// Ouvrir une porte
function openDoor(day, doorElement) {
    if (doorElement.classList.contains('locked')) {
        alert("Cette case n'est pas encore disponible ! 🔒");
        return;
    }
    
    const content = adventContent[day];
    if (!content) return;
    
    // Afficher le modal
    document.getElementById('modal-title').textContent = content.title;
    let bodyHTML = `<p>${content.content}</p>`;
    if (content.image) {
        bodyHTML += `<img src="${content.image}" alt="Jour ${day}">`;
    }
    document.getElementById('modal-body').innerHTML = bodyHTML;
    document.getElementById('modal').style.display = 'block';
    
    // Marquer comme ouvert
    doorElement.classList.add('opened');
    localStorage.setItem(`day-${day}-opened`, 'true');
}

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fermer le modal
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Initialisation
createCalendar();
