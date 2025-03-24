let loginBtn = document.getElementById('check');
let loginForm = document.getElementById('loginForm');
let emails = JSON.parse(localStorage.getItem('obj')) || [];

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (email === "" && password === "") {
        alert("Biểu mẫu không được để trống");
    } else if (email === "") {
        alert("Mời nhập email");
    } else if (password === "") {
        alert("Mời nhập mật khẩu");
    } else {
        let userFound = emails.find(user => user.email === email && user.password === password);

        if (userFound) {
            alert("Đăng nhập thành công!");
            window.location.href = "homepage.html"; 
        } else {
            alert("Sai email hoặc mật khẩu.");
        }
    }
});
