function upperCasing(str) {
    if (typeof str !== "string" || str.length === 0) {
        alert("Dữ liệu không hợp lệ");
        return;
    }
    str = str.toLowerCase();
    let result = ""; 
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || (str[i - 1] === " " && str[i] !== " ")) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    alert(result);
}
let str = prompt("Mời nhập chuỗi:");
upperCasing(str);