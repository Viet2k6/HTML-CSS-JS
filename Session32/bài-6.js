let size = 20;
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let content = document.getElementById('text');

increase.onclick = function() {
    if (size < 50) { 
        size++;
        content.style.fontSize = size + "px";
    }
};
decrease.onclick = function() {
    if (size > 10) { 
        size--;
        content.style.fontSize = size + "px";
    }
};