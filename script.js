const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice");
const rollHistoryE1 = document.getElementById("roll-history");

let historyList = [];

// Function to roll the dice
function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceE1.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

// Function to update roll history
function updateRollHistory() {
    rollHistoryE1.innerHTML = ""; // Clear history
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryE1.appendChild(listItem);
    }
}

// Function to get dice face based on roll result
function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1: return "&#9856;";
        case 2: return "&#9857;";
        case 3: return "&#9858;";
        case 4: return "&#9859;";
        case 5: return "&#9860;";
        case 6: return "&#9861;";
        default: return "";
    }
}

// Add event listener for dice roll button
buttonE1.addEventListener("click", () => {
    // Reset animation
    diceE1.classList.remove("roll-animation");
    void diceE1.offsetWidth; // Trigger reflow to restart animation
    diceE1.classList.add("roll-animation");

    // Roll the dice after animation
    setTimeout(() => {
        rollDice();
    }, 1000);
});
