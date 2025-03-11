function calSum(a, b) {
    if (isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "Dữ liệu không hợp lệ";
    }
    return a + b;
}
let a = +prompt("Mời nhập số thứ nhất:");
let b = +prompt("Mời nhập số thứ hai:");
let sum = calSum(a, b);
alert(sum);
