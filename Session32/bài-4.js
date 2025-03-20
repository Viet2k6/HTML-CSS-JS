let result = document.getElementById('result');
let btn = document.getElementById('btn');

btn.onclick = function () {
    let input = document.getElementById('email').value;
    let atIndex = input.indexOf('@');  
    let dotIndex = input.lastIndexOf('.'); 

    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < input.length - 1) {
        result.textContent = 'Email hợp lệ';
        result.style.color = 'green';
    } else {
        result.textContent = 'Email không hợp lệ';
        result.style.color = 'red';
    }
};