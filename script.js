let currentPlayer = 0;
const diceResultElement = document.getElementById("diceResult");

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // ১ থেকে ৬ এর মধ্যে র্যান্ডম সংখ্যা
    diceResultElement.textContent = `ডাইসের ফলাফল: ${diceRoll}`;
    // গেমের লজিক এখানে যুক্ত করো (যেমন, প্লেয়ার এর চলাচল ইত্যাদি)
}

// ২৫টি ঘর তৈরি করা
const board = document.querySelector(".board");
for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i + 1; // ঘরের নম্বর দেখানো
    board.appendChild(cell);
}

// ডাইস রোল করার বোতাম
const rollButton = document.createElement("button");
rollButton.textContent = "ডাইস রোল করো";
rollButton.onclick = rollDice;
document.body.appendChild(rollButton);
