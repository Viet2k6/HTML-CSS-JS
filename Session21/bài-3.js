let password = "01102006"; 
let inputPassword = prompt("Nhập mật khẩu:");
while (inputPassword !== password) {
    inputPassword = prompt("Mật khẩu sai! Vui lòng nhập lại:");
}
alert("Mật khẩu đúng!");
