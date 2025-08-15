// Loading animation
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

let currentMessageIndex = 0;

function typeWriterEffect(element, text, speed = 40) {
    element.textContent = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function showMessage() {
    document.querySelector('.salwa-greeting').style.display = 'none';
    const modal = document.getElementById('messageModal');
    const titleElement = modal.querySelector('h3');
    const textElement = modal.querySelector('#messageText');
    const senderElement = modal.querySelector('small');

    // Pesan khusus untuk Salwa
    titleElement.textContent = "Pesan Untuk Salwa";
    typeWriterEffect(textElement, "Haiii Salwa! Seperti bunga yang bermekaran di malam hari ini, semoga harimu selalu dipenuhi kebahagiaan kapanpun dan dimanapun kamu berada yaa! Terima kasih sudah menjadi motivasi dan inspirasi di belakangan hariku inii. Aku berharap kedepannya kamu selalu memegang dunia di genggamanmu, atau setidaknya, tidak membiarkan dunia menggenggam erat dirimu hingga tanganmu lelah untuk menggenggam tangan orang lain. Maafkan jika ada beberapa hal yang baru kusadari tentangmu dan itu menyakiti perasaanmu yaa! Aku selalu ingin mengenal dirimu kok. Jadiii, just be yourself kalau didepanku. Jadi salwa yang mencintai dirinya sendiri dan jadi salwa yang mencintai diriku jugak HAHAHAHA",
    );
    senderElement.textContent = "- Someone who adores you! -";

    // Tampilkan modal
    modal.classList.add('show');
    modal.style.display = 'block';

    // Tutup modal jika klik di luar konten
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeMessage() {
    const container = document.getElementById('messageContainer');
    container.style.display = 'none';
}

function closeModal() {
    document.querySelector('.salwa-greeting').style.display = '';
    const modal = document.getElementById('messageModal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalCloseOut 0.5s forwards';
    setTimeout(() => {
        modal.classList.remove('show');
        modal.style.display = 'none';
        modalContent.style.animation = ''; // reset animasi
    }, 500);
}

