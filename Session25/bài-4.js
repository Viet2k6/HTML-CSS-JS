function isPrime(n) {
    if (isNaN(n) || n < 2) {
        return "Dữ liệu không hợp lệ";
    }
    let check = true;
    for (let i = 2; i * i <= n; i++) {  
        if (n % i === 0) {
            check = false;
            break;  
        }
    }
    if (check) {
        return "Là số nguyên tố";
    } else {
        return "Không là số nguyên tố";
    }
}
let n = +prompt("Mời nhập số kiểm tra:");
let result = isPrime(n);
alert(result);