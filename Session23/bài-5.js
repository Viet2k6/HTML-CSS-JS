let arr = [];
let n = +prompt(`Mời nhập số lượng phần tử: `);

if (n < 0) {
    alert(`Số lượng phần tử phải dương`);
} else if (n === 0) {
    alert(`Mảng rỗng`);
} else if (isNaN(n)) {
    alert(`Số lượng phần tử không hợp lệ`);
} else {
    let sum = 0;
    let check = false;
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời nhập phần tử thứ ${i + 1}: `);

        if (isNaN(arr[i])) {
            continue; 
        }
        sum += arr[i];
        check = true;
    }
    if (check) {
        alert(`Tổng các số là: ` + sum);
    } else {
        alert(`Không có phần tử nào là số`);
    }
}