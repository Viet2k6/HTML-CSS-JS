let arr = [];
let n = +prompt(`Mời nhập số lượng phần tử: `);

if (isNaN(n) || n < 0) {
    alert(`Số lượng phần tử không hợp lệ`);
} else if (n === 0) {
    alert(`Không có ký tự số`);
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời nhập phần tử thứ ${i + 1}: `);

        if (isNaN(arr[i])) {
            arr.pop();
        }
    }
    if (arr.length === 0) {
        alert("Không có ký tự số");
    } else {
        alert("Các ký tự số là: " + arr.join(", "));
    }
}