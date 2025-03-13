let n = +prompt("Mời nhập số lượng số:");
if (isNaN(n) || n <= 0) {
    alert("Số lượng số không hợp lệ");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Mời nhập phần tử thứ ${i + 1}:`);
        if (isNaN(num)) {
            alert(`Phần tử thứ ${i + 1} không hợp lệ`);
            i--;
        } else {
            arr.push(num);
        }
    }
    alert(checkNumber(arr));
}

function checkNumber(arr) {
    if (arr.length < 2)
    return false; 
    let gap = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== gap) {
            return false;
        }
    }
    return true;
}
