function isPalindrome(str) {
    if (typeof str !== "string" || str.length === 0) {
        alert("Dữ liệu không hợp lệ");
        return;
    }
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        alert("Chuỗi đối xứng");
    } else {
        alert("Chuỗi không đối xứng");
    }
}
let str = prompt("Mời nhập chuỗi:");
isPalindrome(str);
