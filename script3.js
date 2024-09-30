// Array pesan cinta dan GIF yang sesuai
const loveMessages = [
    { text: "Hallo kenalin nama aku Nanaa", gif: "images/nama_aku.gif.gif" },
    { text: "Dimana yaa cowonya akuu", gif: "images/jalan.gif.gif" },
    { text: "Ini dia cowo aku yang paling imutt", gif: "images/inidia.gif.gif" },
    { text: "Pingin di pukk pukk dehh", gif: "images/perut.gif.gif"},
    { text: "Aku punya bunga buat kamuu", gif: "images/bunga.gif.gif" },
    { text: "Ehh ada pesan buat kamuu, coba bukaa", gif: "images/adapesan.gif.gif"},
    { text: "Dibaca lhoo yaa, awas aja kalo ga dibacaa", gif: "images/akumarah.gif.gif"}
];

// Array pesan lucu dan GIF yang sesuai
const funnyMessages = [
    { text: "Hallo Gantenggg 😘, terimaksii udah hadir di hidup akuuuu", gif: "images/makasihh.gif.gif" },
    { text: "Aku ngerasa beruntung bangett bisa kenal Mamass", gif: "images/beruntung.gif.gif"},
    { text: "Maaf yaa akuu belum bisa ngertiin Mamass ampe sekarang", gif: "images/maaf.gif.gif" },
    { text: "Mamass tolong jaga hatii Mamass buat akuu yaaa, aku gamauu Mamas diambil orang", gif: "images/gamau.gif.gif" },
    { text: "Ohh iyaa kaloo Mamass mau ceritaa, cerita ajaa ke akuu yaa jangan ke cewe lainn", gif: "images/keaku.gif.gif" },
    { text: "Mamass juga harus jaga kesehatan yaa, kalo Mamass sakit aku sedihh", gif: "images/sedih.gif.gif"},
    { text: "Yaudah segitu aja  dulu yaa, makasii udah mauu liatt, lopyuuu sekebonn ❤️", gif: "images/makasii.gif.gif"}
];

// Ambil elemen dari HTML
const loveButton = document.getElementById('loveButton');
const laughButton = document.getElementById('laughButton');
const outputMessage = document.getElementById('outputMessage');
const imageContainer = document.getElementById('imageContainer');

// Fungsi untuk menampilkan pesan cinta dan gambar GIF secara terurut (tidak random)
let loveIndex = 0;
loveButton.addEventListener('click', function() {
    const loveMessage = loveMessages[loveIndex];  // Ambil pesan cinta berdasarkan index
    outputMessage.textContent = loveMessage.text;  // Tampilkan pesan
    imageContainer.innerHTML = `<img src="${loveMessage.gif}" alt="Love GIF">`;  // Tampilkan GIF
    
    // Pindah ke pesan berikutnya, dan reset ke awal jika sudah mencapai akhir
    loveIndex = (loveIndex + 1) % loveMessages.length;
});

// Fungsi untuk menampilkan pesan lucu dan gambar GIF secara terurut (tidak random)
let laughIndex = 0;
laughButton.addEventListener('click', function() {
    const funnyMessage = funnyMessages[laughIndex];  // Ambil pesan lucu berdasarkan index
    outputMessage.textContent = funnyMessage.text;  // Tampilkan pesan
    imageContainer.innerHTML = `<img src="${funnyMessage.gif}" alt="Laugh GIF">`;  // Tampilkan GIF
    
    // Pindah ke pesan berikutnya, dan reset ke awal jika sudah mencapai akhir
    laughIndex = (laughIndex + 1) % funnyMessages.length;
});
