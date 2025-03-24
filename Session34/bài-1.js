let checkBtn = document.getElementById("check");
let form = document.querySelector("form");
let emails = JSON.parse(localStorage.getItem("obj")) || [];

checkBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;
    if (!email || !password || !confirmPassword) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    if (emails.some(user => user.email === email)) {
        alert("Email đã tồn tại!");
        return;
    }

    emails.push({ email, password });
    localStorage.setItem("obj", JSON.stringify(emails));

    alert("Đăng ký thành công!");
    form.reset(); 
});
