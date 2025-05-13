let coins = 0;

function handleTap() {
  const adLinks = [
    "https://www.profitableratecpm.com/gek6e26ws?key=8fc5fec2b6aa16de54e32b8a1a75c315"
  ];
  const adUrl = adLinks[Math.floor(Math.random() * adLinks.length)];

  // Load invisible ad
  document.getElementById("adFrame").src = adUrl;

  document.getElementById("status").innerText = "Ad loading...";

  // Simulate ad load time and reward
  setTimeout(() => {
    coins += 1;
    document.getElementById("coin-count").innerText = `Coins: ${coins}`;
    document.getElementById("status").innerText = "+1 coin earned!";
  }, 5000); // 5 seconds wait per tap
}