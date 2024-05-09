document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("paper");
});

function playGame(userChoice) {
    var choices = ["rock", "paper"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result;

    if (userChoice === computerChoice) {
        result = "Hòa!";
    } else if ((userChoice === "rock" && computerChoice === "paper") ||
               (userChoice === "paper" && computerChoice === "rock")) {
        result = userChoice === "rock" ? "Thua!" : "Thắng!";
    }

    document.getElementById("result").textContent = "Kết quả: " + result;
}
