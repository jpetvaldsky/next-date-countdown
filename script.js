// Nastav si začátek a konec období (formát YYYY-MM-DDTHH:MM)
const startDate = new Date("2025-12-02T07:00:00");
const endDate = new Date("2025-12-07T12:00:00");

function updateCountdown() {
  const now = new Date();

  const total = endDate - startDate;
  const elapsed = now - startDate;
  const remaining = endDate - now;
  let progress = Math.min(Math.max(elapsed / total, 0), 1); // clamp 0–1

  let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((remaining / (1000 * 60)) % 60);
  let seconds = Math.floor((remaining / 1000) % 60);

  // Pokud už uplynulo, ukážeme hotovo
  let text;
  if (remaining <= 0) {
    text = "✅ Hotovo!";
    progress = 1;
  } else if (elapsed < 0) {
    text = "⏳ Ještě nezačalo";
    progress = 0;
  } else {
    text = `Zbývá ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  let totalMinutes = days*24*60 + hours*60 + minutes;
  let totalSeconds = totalMinutes*60 + seconds;

  text += `<br />${totalMinutes} minut<br />${totalSeconds} sekund`;

  document.getElementById("countdown").innerHTML = text;
  document.getElementById("bar").style.width = `${(progress * 100).toFixed(1)}%`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
