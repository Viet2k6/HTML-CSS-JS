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
    
    let num = +prompt("Mời nhập số phần tử chứa trong mảng con:");
    if (isNaN(num) || num <= 0) {
        alert("Số không hợp lệ");
    } else {
        console.log(splitArray(arr, num));
    }
}

function splitArray(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i, i + num));
    }
    return result;
}