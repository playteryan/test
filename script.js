const answer = "2580";

const codeInput = document.getElementById("code");
const unlockBtn = document.getElementById("unlock");
const hintBtn = document.getElementById("hintBtn");
const hintText = document.getElementById("hint");
const reward = document.getElementById("reward");
const status = document.getElementById("status");

function unlockReward() {
  const entered = codeInput.value.trim();

  if (!/^\d{4}$/.test(entered)) {
    status.textContent = "Please enter a 4-digit numeric code.";
    reward.classList.add("hidden");
    return;
  }

  if (entered === answer) {
    status.textContent = "Correct code. Reward unlocked!";
    reward.classList.remove("hidden");
    return;
  }

  status.textContent = "Incorrect code. Double-check the April Fools clues.";
  reward.classList.add("hidden");
}

unlockBtn?.addEventListener("click", unlockReward);
codeInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockReward();
});

hintBtn?.addEventListener("click", () => {
  hintText.classList.toggle("hidden");
});

const adminForm = document.getElementById("adminForm");
const adminId = document.getElementById("adminId");
const adminPw = document.getElementById("adminPw");
const adminMsg = document.getElementById("adminMsg");

adminForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (adminId.value.trim() === "admin" && adminPw.value.trim() === "fools2026") {
    adminMsg.textContent = "Authentication successful. Redirecting...";
    window.location.href = "unreleased.html";
    return;
  }

  adminMsg.textContent = "Invalid credentials.";
});


const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}
