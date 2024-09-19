// Daftar 10 kalimat yang akan ditampilkan satu per satu
const kalimat = [
    " gimana kabarnya?",
    " Allhamdulillah kalau sehat :)",
    " Syafakillah Kalo sakit, semoga cepat sembuh yaa",
    " milaa masih inget janji aku ngaa?",
    " Aku engga ingkar tau sama janji aku",
    " terserah si kalo engga percaya juga hehe",
    " tapi yang jelas aku engga ingkar janji sama milaa",
    " aku cuma mau ngomong beberapa kata buat mila",
    " selamat ulang tahun mila, semoga mila menjadi anak yang bisa diandalkan dimanapun,dan semoga di usia baru ini milaa lebih bahagaia menjali keseharian nya"
];

let index = 0; // Variabel untuk melacak kalimat mana yang akan ditampilkan

document.getElementById('klikSaya').addEventListener('click', function() {
    if (index === 0) {
        // Ganti teks "Hai miee" dengan "Baca sampai habis yaa"
        document.getElementById('headerText').textContent = "Baca sampai habis yaa";

        // Menghilangkan tulisan instruksi setelah tombol ditekan
        document.querySelector('main p').style.display = 'none'; // Tulisan "Tekan tombol di bawah ini yaa."
    }

    if (index < kalimat.length) {
        // Menampilkan kalimat berdasarkan indeks
        document.getElementById('pesan').textContent = kalimat[index];
        index++; // Pindah ke kalimat berikutnya
    } else {
        // Jika semua kalimat sudah ditampilkan
        document.getElementById('pesan').textContent = "maaf cuma bisa ngucapin kaya gini , terus makasi milaa udah mau baca semuanya :)";
    }
});
