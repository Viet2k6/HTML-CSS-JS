let num = +prompt("Mời nhập số lượng số nguyên tố:");

if (isNaN(num) || num < 1 || num % 1 !== 0) {
    alert("Không hợp lệ!");
} else {
    let count = 2;
    let check = 0;

    while (check < num) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(count); i++) {
            if (count % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(count);
            check++;
        }
        count++;
    }
}