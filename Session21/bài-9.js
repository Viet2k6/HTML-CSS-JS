let num = +prompt("Mời nhập số:");

if (isNaN(num) || num < 2 || num % 1 !== 0) {
    alert("Không hợp lệ!");
} else {
    let check = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            check = false; 
            break;
        }
    }
    if (check) {
        alert(`${num} là số nguyên tố`);
    } else {
        alert(`${num} không phải là số nguyên tố`);
    }
}
