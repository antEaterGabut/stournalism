document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // CEK STATUS LOGIN:
    // Jika pengguna SUDAH login, matikan/sembunyikan loading screen secara instan
    if (isLoggedIn === "true") {
        if (loadingScreen) {
            loadingScreen.style.display = "none"; // Langsung hilangkan tanpa animasi
        }
        document.body.classList.remove("loading-active");
        return; // Hentikan eksekusi script selanjutnya
    }

    // Jika BELUM login, jalankan animasi loading screen seperti biasa
    document.body.classList.add("loading-active");

    window.addEventListener("load", () => {
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add("hidden");
                document.body.classList.remove("loading-active");
            }, 2500); // Waktu animasi loading screen
        }
    });
});