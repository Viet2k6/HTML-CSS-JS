let overlay = document.getElementById("overlay");
let btn = document.getElementById("open");
let mark = document.getElementById("mark");

btn.onclick = function () {
    overlay.classList.toggle("show"); 
};

mark.onclick = function () {
    overlay.classList.toggle("show");
};