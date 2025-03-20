let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let progress = document.getElementById('progress');
let current = 20; 
function updateProgress() {
    progress.style.width = current + '%';
}

increase.onclick = function() {
    if (current < 100) {
        current += 10;
    }
    updateProgress();
};

decrease.onclick = function() {
    if (current > 0) {
        current -= 10;
    }
    updateProgress();
};
updateProgress();
