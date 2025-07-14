const showCakeBtn = document.getElementById("showCakeBtn");
const lightCandleBtn = document.getElementById("lightCandleBtn");
const fuegoElements = document.querySelectorAll(".fuego");
const typedText = document.getElementById("typedText");
const giftBox = document.getElementById("giftBox");
const giftIcon = document.querySelector(".gift-icon");
const giftLabel = document.querySelector(".gift-label");
const memories = document.querySelector(".all-memories");
const wish = "Chúc em bé Tiên của anh có một ngày sinh nhật thật tuyệt vời, tràn ngập niềm vui, hạnh phúc và những điều bất ngờ dễ thương nha!\n💖💖💖Love You💖💖💖";
function typeEffect(text, speed = 40) {
  typedText.textContent = "";
  let i = 0;
  typedText.style.display = "inline-block";
  const typing = setInterval(() => {
    typedText.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

showCakeBtn.addEventListener("click", () => {
  document.querySelector(".cake").style.display = "block";
  showCakeBtn.style.display = "none";
  lightCandleBtn.style.display = "block";
});

lightCandleBtn.addEventListener("click", () => {
  fuegoElements.forEach(f => f.style.display = "block");
  document.querySelector(".hidden-part").style.display = "block";

  lightCandleBtn.style.display ="none";
  typeEffect(wish, 40);
});


document.getElementById("giftBox").addEventListener("click", function () {
    giftIcon.style.display = "none";
  giftLabel.style.display = "none";
  this.classList.add("open");

      confetti({
        particleCount: 60,
        spread: 70 + Math.random() * 20,
        origin: { y: 0.6 }
      });
 

  
});
function createBalloon() {
  const container = document.getElementById("balloon-container");
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  container.appendChild(balloon);
  setTimeout(() => balloon.remove(), 5000);
}

// Tạo nhiều bóng mỗi lần
for (let i = 0; i < 17; i++) {
  setTimeout(createBalloon, i * 150);
}
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

function createStar() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2 + 0.5,
    speed: Math.random() * 0.4 + 0.2,
    opacity: Math.random() * 0.5 + 0.3,
    color: `rgba(255, 215, 180, ${Math.random() * 0.5 + 0.4})` // vàng kem nhẹ
  };
}

for (let i = 0; i < 100; i++) {
  stars.push(createStar());
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = s.color;
    ctx.fill();
    s.y += s.speed;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
}, { once: true });

