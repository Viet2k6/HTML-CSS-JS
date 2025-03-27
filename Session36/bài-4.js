let btnChange = document.querySelector('#mode-icon');
let bodyElement = document.querySelector('body');
let mode = localStorage.getItem('mode');

if (mode === 'dark-mode') {
    bodyElement.classList.add('dark-mode');
}

btnChange.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark-mode');
    } else {
        localStorage.setItem('mode', '');
    }
});
