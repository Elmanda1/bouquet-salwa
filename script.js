// Loading animation
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

// Message functionality
const messages = [
    {
        title: "Pesan Cinta 💖",
        text: "Seperti bunga-bunga cantik ini yang tumbuh dan mekar, cintaku padamu juga tumbuh setiap hari. Semoga hari-harimu selalu dipenuhi kebahagiaan seperti taman bunga yang penuh warna.",
        sender: "- Dengan cinta -"
    },
    {
        title: "Untuk Orang Terkasih 🌹",
        text: "Setiap kelopak bunga ini mewakili alasan mengapa aku mencintaimu. Kecantikanmu, kebaikanmu, dan senyumanmu yang selalu menerangi hariku.",
        sender: "- Dari hati yang terdalam -"
    },
    {
        title: "Bunga untuk Kamu 🌺",
        text: "Meskipun bunga ini hanya virtual, perasaan yang ingin kusampaikan sangatlah nyata. Kamu adalah yang terbaik yang pernah terjadi dalam hidupku.",
        sender: "- Selamanya milikmu -"
    }
];

let currentMessageIndex = 0;

function showMessage() {
    const modal = document.getElementById('messageModal');
    const titleElement = modal.querySelector('h3');
    const textElement = modal.querySelector('#messageText');
    const senderElement = modal.querySelector('small');

    // Pesan khusus untuk Salwa
    titleElement.textContent = "Pesan Untuk Salwa 💖";
    textElement.textContent = "Hai Salwa! Seperti bunga-bunga cantik ini, semoga harimu selalu mekar dan penuh kebahagiaan. Terima kasih sudah menjadi inspirasi dan cahaya di hidupku. Semoga selalu tersenyum dan bahagia ya! 🌸";
    senderElement.textContent = "- Dari seseorang yang sayang Salwa -";

    // Tampilkan modal dengan animasi
    modal.classList.add('show');
    modal.style.display = 'block';

    // Tutup modal jika klik di luar konten
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Sparkle animasi
    createSparkles();
}

function closeMessage() {
    const container = document.getElementById('messageContainer');
    container.style.display = 'none';
}

function closeModal() {
    const modal = document.getElementById('messageModal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalCloseOut 0.5s forwards';
    setTimeout(() => {
        modal.classList.remove('show');
        modal.style.display = 'none';
        modalContent.style.animation = ''; // reset animasi
    }, 500);
}

// Sparkle effect when clicking flowers
function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(sparkleContainer);
    
    // Create multiple sparkles
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createSparkle(sparkleContainer);
        }, i * 50);
    }
    
    // Remove sparkle container after animation
    setTimeout(() => {
        document.body.removeChild(sparkleContainer);
    }, 2000);
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    const size = Math.random() * 6 + 4;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    sparkle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, #fff 30%, #ff69b4 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        animation: sparkleAnim 1.5s ease-out forwards;
        box-shadow: 0 0 10px #ff69b4;
    `;
    
    container.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        container.removeChild(sparkle);
    }, 1500);
}