let diceValue = 1;
let playerPosition = [0, 0]; // Starting positions for two players

function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = diceValue;

    // Update player position based on dice roll
    movePlayer();
}

function movePlayer() {
    for (let i = 0; i < playerPosition.length; i++) {
        playerPosition[i] += diceValue; // Move player by the dice value
        // Update player position on the board
        let playerElement = document.getElementById(`player${i}`);
        if (playerElement) {
            playerElement.style.top = `${playerPosition[i] * 20}px`; // Update based on your board scale
            playerElement.style.left = `${playerPosition[i] * 20}px`;
        }
    }
}

// Function to create player elements
function createPlayers() {
    let board = document.querySelector('.board');
    for (let i = 0; i < playerPosition.length; i++) {
        let playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.id = `player${i}`;
        playerDiv.style.top = '0px';
        playerDiv.style.left = '0px';
        board.appendChild(playerDiv);
    }
}

createPlayers();
