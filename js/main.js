// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// // Fungsi untuk mengubah mode
// function toggleDarkMode() {
//   const body = document.body;
//   body.classList.toggle("dark-mode");

//   // Simpan preferensi mode di local storage
//   const isDarkMode = body.classList.contains("dark-mode");
//   localStorage.setItem("darkMode", isDarkMode);
// }

// // Event listener untuk tombol "Dark Mode"
// document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// // Memeriksa preferensi mode yang disimpan di local storage saat memuat halaman
// window.addEventListener("load", () => {
//   const isDarkMode = localStorage.getItem("darkMode") === "true";
//   if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//   }
// });

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeStyles = document.getElementById('darkModeStyles');
const navbar = document.querySelector('.navbar');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        darkModeStyles.href = 'styles/dark-mode.css';
        navbar.style.backgroundColor = 'pink'; // Mengubah warna latar belakang navbar menjadi pink saat mode gelap diaktifkan
    } else {
        darkModeStyles.href = '';
        navbar.style.backgroundColor = ''; // Menghapus properti backgroundColor untuk kembali ke warna latar belakang aslinya
    }
});