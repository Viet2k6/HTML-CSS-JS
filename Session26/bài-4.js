function isPrimeNumber(n) {
    if (n < 2) 
    return false; 
    for (let i = 2; i < n; i++) { 
        if (n % i === 0)
        return false; 
    }
    return true;
}
function getPrimeNumbers() {
    let n = +prompt("Mời nhập số lượng số muốn thêm: ");
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = +prompt("Mời nhập số: ");
        if (isNaN(num)) {
            alert("Dữ liệu không hợp lệ");
        } else if (isPrimeNumber(num)) {
            arr.push(num);
        }
    }
    if (arr.length === 0) {
        alert("Mảng không có phần tử");
    }
    return arr;
}
let filteredArr = getPrimeNumbers();
console.log(filteredArr);
