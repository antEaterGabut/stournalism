const inputJudul = document.getElementById('judul');
const inputTgl = document.getElementById('tgl');
const editorIsi = document.getElementById('isi-jurnal');
const statusSimpan = document.getElementById('status-simpan');
const toolbarButtons = document.querySelectorAll('.ubi-toolbar button');

// 1. Muat data tersimpan saat halaman dibuka
window.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('stornalism_draft'));

    if (savedData) {
        inputJudul.value = savedData.judul || '';
        inputTgl.value = savedData.tgl || '';
        editorIsi.innerHTML = savedData.isi || '';
        statusSimpan.textContent = 'Catatan terakhir dimuat';
    } else {
        inputTgl.value = new Date().toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });
    }
});

// 2. Fungsi Tombol Toolbar U, B, I
toolbarButtons.forEach((btn) => {
    btn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const command = btn.getAttribute('data-cmd');
        document.execCommand(command, false, null);
        updateToolbarState();
        autoSave();
    });
});

function updateToolbarState() {
    toolbarButtons.forEach((btn) => {
        const command = btn.getAttribute('data-cmd');
        if (document.queryCommandState(command)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

editorIsi.addEventListener('keyup', updateToolbarState);
editorIsi.addEventListener('mouseup', updateToolbarState);

// 3. Fungsi Auto-Save
let timerSimpan;
function autoSave() {
    statusSimpan.textContent = 'Menyimpan...';
    clearTimeout(timerSimpan);

    timerSimpan = setTimeout(() => {
        const bersihIsi = editorIsi.innerHTML === '<br>' ? '' : editorIsi.innerHTML;

        const dataJurnal = {
            judul: inputJudul.value,
            tgl: inputTgl.value,
            isi: bersihIsi,
            updatedAt: new Date().toISOString()
        };

        localStorage.setItem('stornalism_draft', JSON.stringify(dataJurnal));
        statusSimpan.textContent = 'Semua perubahan tersimpan';
    }, 400);
}

inputJudul.addEventListener('input', autoSave);
inputTgl.addEventListener('input', autoSave);
editorIsi.addEventListener('input', autoSave);