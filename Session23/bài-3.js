let arr = [];
let n = +prompt(`Mời nhập số lượng phần tử: `);

if (isNaN(n) || n < 0) {
    alert(`Số lượng phần tử không hợp lệ`);
} else if (n === 0) {
    alert(`Mảng rỗng`);
} else {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Mời nhập phần tử thứ ${i + 1}: `);
        arr.push(num);
        if (num < 0) {
            count++;
        }
    }
    alert(`Số phần tử âm trong mảng: ${count}`);
}