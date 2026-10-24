document.addEventListener('DOMContentLoaded', () => {
    // inisiasi variabel
    const logo = document.querySelector('.splash-logo');
    const tittle = document.querySelector('.splash-tittle');
    const cs = document.querySelector('.splash-cs');
    const splashScreen = document.querySelector('.splash-screen')
    const headerFile = document.querySelector('.container-content')
    // jalankan program
    if (logo) {
        setTimeout(() => {
            logo.classList.add('show-logo');
        }, 1000);

        setTimeout(() => {
            if (tittle) tittle.classList.add('tittle-show')
        }, 2000);
        
        setTimeout(() => {
            if (cs) cs.classList.add('cs-show')
        }, 2000);
        
        setTimeout(() => {
            splashScreen.classList.add('screen-hidden');

            if (headerFile) {
                headerFile.classList.add('show-content');
            }

            setTimeout(() => {
                splashScreen.remove();
            }, 800);
        }, 4000); 
        

    }

});