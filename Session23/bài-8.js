let arr = [];
let n = +prompt(`Mời nhập số lượng phần tử: `);
if (n < 0) {
    alert(`Số lượng phần tử không được nhỏ hơn 0`);
} else if (n === 0) {
    alert(`Không phải dãy số Fibonacci`);
} else if (isNaN(n)) {
    alert(`Số lượng phần tử không hợp lệ`);
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời nhập phần tử thứ ${i + 1}: `);
    }
    if (arr.length < 3) {
        alert(`Không phải dãy số Fibonacci`);
    } else {
        let check = true;
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                check = false;
                break;
            }
        }
        if (check) {
            alert(`Là dãy số Fibonacci`);
        } else {
            alert(`Không phải dãy số Fibonacci`);
        }
    }
}
