let num = +prompt("Mời nhập số nguyên:");

while (isNaN(num) || num % 1 !== 0) {
    num = +prompt("Không hợp lệ, vui lòng nhập lại:");
}
console.log(`Các ước của ${num} là:`);
for (let i = 1; i <= Math.abs(num); i++) {
    if (num % i === 0) {
        console.log(i);
    }
}
