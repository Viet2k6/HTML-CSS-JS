let arr = [];
let n = +prompt(`Mời nhập số lượng phần tử: `);
if (n < 0) {
    alert(`Số lượng phần tử phải dương`);
} else if (n === 0) {
    alert(`Mảng rỗng`);
} else if (isNaN(n)) {
    alert(`Số lượng phần tử không hợp lệ`);
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời nhập số thứ ${i + 1}: `);
    }

    arr.sort((a, b) => a - b);
    let max = arr[arr.length - 1];
    let maxSecond = null;

    for (let i = arr.length - 2; i >= 0; i--){
        if (arr[i] < max) {
            secondMax = arr[i];
            break;
        }
    }
    if (maxSecond !== null){
        alert(`Số lớn thứ hai là: ` + maxSecond);
    } else {
        alert(`Không có số lớn thứ hai`);
    }
}
