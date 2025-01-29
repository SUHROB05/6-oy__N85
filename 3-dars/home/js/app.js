document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home');
    const budinlikLink = document.getElementById('budinlik');
    const taymerLink = document.getElementById('taymer');
    const musiqaLink = document.getElementById('musiqa');

    const homeContent = document.getElementById('home-content');
    const budinlikContent = document.getElementById('budinlik-content');
    const taymerContent = document.getElementById('taymer-content');
    const musiqaContent = document.getElementById('musiqa-content');

    homeLink.addEventListener('click', function() {
        showContent(homeContent);
    });

    budinlikLink.addEventListener('click', function() {
        showContent(budinlikContent);
    });

    taymerLink.addEventListener('click', function() {
        showContent(taymerContent);
    });

    musiqaLink.addEventListener('click', function() {
        showContent(musiqaContent);
    });

    function showContent(content) {
        homeContent.style.display = 'none';
        budinlikContent.style.display = 'none';
        taymerContent.style.display = 'none';
        musiqaContent.style.display = 'none';
        content.style.display = 'block';
    }

    // Vaqtni yangilash
    function updateDateTime() {
        const now = new Date();
        const datetimeElement = document.getElementById('datetime');
        datetimeElement.textContent = now.toLocaleString();
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Musiqa faylini yuklash
    const musicFileInput = document.getElementById('music-file');
    const audioPlayer = document.getElementById('audio-player');

    musicFileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            audioPlayer.src = objectURL;
        }
    });
});