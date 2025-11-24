// Contenu personnalisé pour chaque jour
const adventContent = {
    1: {
        title: "✨ Jour 1",
        message: "Bienvenue dans ton calendrier de l'Avent !<br><br>Chaque jour apportera une nouvelle surprise 💝",
        image: "" // URL optionnelle
    },
    2: {
        title: "❄️ Jour 2",
        message: "Un souvenir de nous...",
        image: ""
    },
    3: {
        title: "🎄 Jour 3",
        message: "Continue d'ouvrir les portes !",
        image: ""
    },
    // ... Ajoute les jours 4 à 23
    24: {
        title: "🎁 Jour 24",
        message: "Joyeux Noël ! 🎄✨<br><br>Merci d'avoir ouvert chaque porte avec moi.",
        image: ""
    }
};

// Générer le calendrier
function createCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    
    // Créer un tableau des jours mélangés (optionnel)
    let days = Array.from({length: 24}, (_, i) => i + 1);
    // days = shuffle(days); // Décommenter pour mélanger
    
    days.forEach(day => {
        const door = document.createElement('div');
        door.className = 'door';
        
        // Vérifier si le jour est débloqué
        const unlockDate = new Date(2025, 11, day); // Décembre 2025
        const isOpened = localStorage.getItem(`day-${day}`) === 'opened';
        
        if (isOpened) {
            door.classList.add('opened');
        } else if (today < unlockDate) {
            door.classList.add('locked');
        }
        
        door.innerHTML = `<div class="door-number">${day}</div>`;
        door.addEventListener('click', () => openDoor(day, door));
        
        calendar.appendChild(door);
    });
}

// Ouvrir une porte
function openDoor(day, doorElement) {
    // Vérifier si la porte est verrouillée
    if (doorElement.classList.contains('locked')) {
        alert('Cette porte n\'est pas encore disponible ! 🔒');
        return;
    }
    
    const content = adventContent[day];
    if (!content) {
        alert('Contenu non disponible pour ce jour.');
        return;
    }
    
    // Afficher le modal
    const modalBody = document.getElementById('modalBody');
    let html = `<h2>${content.title}</h2>`;
    html += `<p>${content.message}</p>`;
    if (content.image) {
        html += `<img src="${content.image}" alt="Jour ${day}">`;
    }
    modalBody.innerHTML = html;
    
    // Ouvrir le modal
    document.getElementById('modal').classList.add('active');
    
    // Marquer comme ouvert
    doorElement.classList.add('opened');
    localStorage.setItem(`day-${day}`, 'opened');
}

// Fermer le modal
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Mélanger un tableau (optionnel)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listeners
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

// Initialisation
createCalendar();
