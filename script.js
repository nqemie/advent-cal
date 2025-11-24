// Contenu personnalisé pour chaque jour
const adventContent = {
    1: {
        title: "✨ Jour 1",
        message: "Bienvenue dans ton calendrier de l'Avent Mathias ! 🎄",
        image: ""
    },
    2: {
        title: "❄️ Jour 2",
        message: "Une nouvelle surprise t'attend...",
        image: ""
    },
    // Ajoute les jours 3 à 24...
    24: {
        title: "🎁 Jour 24",
        message: "Joyeux Noël Mathias ! 🎄✨",
        image: ""
    }
};

// Générer le calendrier
function createCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    
    // 12 premières étoiles visibles dans le mockup
    for (let day = 1; day <= 12; day++) {
        const door = document.createElement('div');
        door.className = 'door';
        
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
    }
}

// Ouvrir une porte
function openDoor(day, doorElement) {
    if (doorElement.classList.contains('locked')) {
        alert('Cette porte n\'est pas encore disponible ! 🔒');
        return;
    }
    
    const content = adventContent[day];
    if (!content) return;
    
    const modalBody = document.getElementById('modalBody');
    let html = `<h2>${content.title}</h2>`;
    html += `<p>${content.message}</p>`;
    if (content.image) {
        html += `<img src="${content.image}" alt="Jour ${day}">`;
    }
    modalBody.innerHTML = html;
    
    document.getElementById('modal').classList.add('active');
    doorElement.classList.add('opened');
    localStorage.setItem(`day-${day}`, 'opened');
}

// Fermer le modal
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

// Initialisation
createCalendar();
