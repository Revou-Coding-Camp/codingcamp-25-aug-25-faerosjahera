console.log("Hello World!");

greet();

function greet() 
{
    let username = prompt("Please enter your name:");
    document.getElementById("username").innerText = username;
}

// Daftar gambar slider
const images = [
  "breathease.png",
  "gacoan.png"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

function changeBackground() {
  slider.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Panggil pertama kali
changeBackground();

// Ganti gambar tiap 3 detik
setInterval(changeBackground, 3000);


document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault(); // biar nggak reload

    // Ambil value dari input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("userMessage").value;
	
    if (!name || !email || !message) {
      alert("Semua field harus diisi!");
      return;
    }

    // Tampilkan di div#result
    document.getElementById("result").innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  });


