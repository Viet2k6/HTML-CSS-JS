let background = document.getElementById("background");
let greenButton = document.getElementById("green");
let redButton = document.getElementById("red");
let purpleButton = document.getElementById("purple");

greenButton.onclick = function () {
    background.style.backgroundColor = "green";
};

redButton.onclick = function () {
    background.style.backgroundColor = "red";
};

purpleButton.onclick = function () {
    background.style.backgroundColor = "purple";
};