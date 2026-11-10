let currentTrackSrc = "";

function playMusic(element) {
    const audio = document.getElementById("global-audio");
    if (!audio) return;

    const newSrc = element.getAttribute("data-src");

    // Jika mengklik lagu yang BERBEDA dari yang sedang diset
    if (currentTrackSrc !== newSrc) {
        audio.src = newSrc;
        currentTrackSrc = newSrc;
        
        // Langsung putar lagu baru
        audio.play().then(() => {
            console.log("berhasil memutar audio");
        }).catch((err) => {
            console.error("Gagal memutar audio:", err);
        });
        return;
    }

    // Jika mengklik lagu YANG SAMA (berfungsi sebagai pause/resume)
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}