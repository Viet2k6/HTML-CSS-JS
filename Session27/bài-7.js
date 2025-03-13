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
    let missingNumbers = findMissing(arr);
    if (missingNumbers.length === 0) {
        alert("Không có số nào bị thiếu");
    } else {
        alert(missingNumbers);
    }
}

function findMissing(arr) {
    function compareNumbers(a, b) {
        return a - b;
    }

    let newArr = arr.sort(compareNumbers);
    let min = newArr[0];
    let max = newArr[newArr.length - 1];
    let result = [];

    for (let i = min; i <= max; i++) {
        if (newArr.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;
}