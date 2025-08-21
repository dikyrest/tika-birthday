// JavaScript untuk Tombol Musik
const audio = document.getElementById("myAudio");
const musicButton = document.getElementById("music-button");
const playIcon = document.getElementById("play-icon");

musicButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
});

// JavaScript untuk Animasi Balon
const balloonContainer = document.getElementById("balloon-container");
const colors = ["#ff69b4", "#add8e6", "#90ee90", "#ffff00", "#ffa07a"];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = `${Math.random() * 100}vw`;

  const animationDuration = Math.random() * 5 + 8;
  const animationDelay = Math.random() * 5;

  balloon.style.animationDuration = `${animationDuration}s`;
  balloon.style.animationDelay = `${animationDelay}s`;
  balloon.style.transform = `scale(${Math.random() * 0.5 + 0.7})`;

  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, (animationDuration + animationDelay) * 1000);
}

for (let i = 0; i < 15; i++) {
  createBalloon();
}

setInterval(() => {
  createBalloon();
}, 1000);

// --- JavaScript untuk Kue Ulang Tahun ---
const showCakeGift = document.getElementById('show-cake-gift');
const cakeContainer = document.getElementById('cake-container');
const blowOutButton = document.getElementById('blow-out-button');
const flames = document.querySelectorAll('.flame');

let clickCount = 0; // Variabel untuk menghitung klik

showCakeGift.addEventListener('click', () => {
    cakeContainer.style.display = 'block';
    showCakeGift.style.display = 'none';
});

blowOutButton.addEventListener('click', () => {
    if (clickCount === 0) {
        // Klik pertama: mengubah teks menjadi "Tiup!"
        blowOutButton.textContent = 'Tiup!';
        clickCount++;
    } else if (clickCount === 1) {
        // Klik kedua: mematikan lilin dan mengubah teks
        flames.forEach(flame => {
            flame.style.animation = 'none';
            flame.style.opacity = '0';
        });
        blowOutButton.textContent = 'Semoga diijabah aamiin... 🎉';
        blowOutButton.style.backgroundColor = '#9932cc';
        clickCount++;
    }
    // Untuk klik ketiga dan seterusnya, tidak ada perubahan
});