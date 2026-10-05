const brainrots = [
  { name: "Tralalero Tralala", emoji: "🦈", rarity: "Common", chance: 55 },
  { name: "Tung Tung Tung Sahur", emoji: "🪵", rarity: "Rare", chance: 25 },
  { name: "Brr Brr Patapim", emoji: "🌳", rarity: "Epic", chance: 14 },
  { name: "Bombardiro Crocodilo", emoji: "🐊", rarity: "Legendary", chance: 5 },
  { name: "Rare Brainrot", emoji: "👑", rarity: "Mythic", chance: 1 }
];

let coins = 100;
const collection = [];

const coinsEl = document.getElementById("coins");
const countEl = document.getElementById("count");
const resultEl = document.getElementById("result");
const collectionEl = document.getElementById("collection");
const openBtn = document.getElementById("openBtn");

function pickBrainrot() {
  const roll = Math.random() * 100;
  let sum = 0;
  for (const item of brainrots) {
    sum += item.chance;
    if (roll <= sum) return item;
  }
  return brainrots[0];
}

function render() {
  coinsEl.textContent = coins;
  countEl.textContent = collection.length;
  openBtn.disabled = coins < 10;
  collectionEl.innerHTML = collection.map(item => `
    <div class="card">
      <div class="emoji">${item.emoji}</div>
      <b>${item.name}</b>
      <div class="rarity">${item.rarity}</div>
    </div>
  `).join("");
}

openBtn.addEventListener("click", () => {
  if (coins < 10) return;
  coins -= 10;
  const item = pickBrainrot();
  collection.push(item);
  resultEl.innerHTML = `${item.emoji} <strong>${item.name}</strong><br><small>${item.rarity}</small>`;
  render();
});

render();
