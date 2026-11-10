const audio = document.getElementById("global-audio");

function playMusic(trackNumber) {
    if (audio.paused) {
        audio.play().then(() => {
            console.log("musik berjalan");
        }).catch((error) => {
            console.error("terjadi kesalahan saat memutar musik:", error);
        });
    } else {
        audio.pause();
    }
}