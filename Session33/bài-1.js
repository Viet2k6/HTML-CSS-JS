let mode = document.getElementById('mode');
let input = document.getElementById('input');

mode.onclick = function () {
    if (input.type === "password") {
        input.type = "text";
        mode.classList.replace("fa-eye", "fa-eye-slash"); 
    } else {
        input.type = "password";
        mode.classList.replace("fa-eye-slash", "fa-eye"); 
    }
};
