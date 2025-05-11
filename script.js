// Add stickers randomly on the page
const stickers = ["❤️", "🎂", "🎉", "🎁", "🌸", "✨", "🥳", "💝"];
const colors = ["#ff6b8b", "#ff9eaf", "#ffcdd2", "#ff4081", "#ff80ab"];

function addStickers() {
  for (let i = 0; i < 15; i++) {
    const sticker = document.createElement("div");
    sticker.className = "sticker";
    sticker.innerHTML = stickers[Math.floor(Math.random() * stickers.length)];
    sticker.style.left = Math.random() * 100 + "vw";
    sticker.style.top = Math.random() * 100 + "vh";
    sticker.style.fontSize = Math.random() * 20 + 20 + "px";
    sticker.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(sticker);

    sticker.addEventListener("click", function () {
      this.style.transform = "scale(1.5) rotate(20deg)";
      setTimeout(() => {
        this.remove();
      }, 500);
    });
  }
}

// Confetti effect
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = Math.random() * 10 + 5 + "px";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }

  // Play a birthday sound (uncomment to add sound)
  // const audio = new Audio('https://www.soundjay.com/human/sounds/birthday-song-01.mp3');
  // audio.play();
}

// Floating hearts effect
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

// Add photo functionality (placeholder)
function addPhoto() {
  alert("In a real implementation, this would let you upload photos!");
}

// Initialize stickers when page loads
window.onload = function () {
  addStickers();
};
