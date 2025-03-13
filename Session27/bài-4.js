function inputNumbers(arr) {
    let n = +prompt("Mời nhập số lượng số: ");
    if (n <= 0 || isNaN(n)) {
        alert("Số lượng không hợp lệ.");
    } else {
        for (let i = 0; i < n; i++) {
            let num = +prompt(`Mời nhập số thứ ${i + 1}: `);
            if (isNaN(num)) {
                alert("Số không hợp lệ.");
                i--;
                continue;
            }
            arr.push(num);
        }
    }
}

function average(arr) {
    if (arr.length === 0) {
        alert("Mảng rỗng.");
        return;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    alert(`Trung bình các số trong mảng là: ${avg}`);
}

function findMaxEven(arr) {
    if (arr.length === 0) {
        alert("Mảng rỗng.");
        return;
    }
    let maxEven = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (maxEven === null || arr[i] > maxEven) {
                maxEven = arr[i];
            }
        }
    }
    if (maxEven === null) {
        alert("Không có số chẵn trong mảng.");
    } else {
        alert(`Số nguyên chẵn lớn nhất trong mảng là: ${maxEven}`);
    }
}

function findMinOdd(arr) {
    if (arr.length === 0) {
        alert("Mảng rỗng.");
        return;
    }
    let minOdd = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (minOdd === null || arr[i] < minOdd) {
                minOdd = arr[i];
            }
        }
    }
    if (minOdd === null) {
        alert("Không có số lẻ trong mảng.");
    } else {
        alert(`Số nguyên lẻ nhỏ nhất trong mảng là: ${minOdd}`);
    }
}

let menu = `
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.

Lựa chọn cuỷa bạn là gì?
 `;

let choice = 0;
let arr = [];

while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            inputNumbers(arr);
            break;
        case 2:
            average(arr);
            break;
        case 3:
            findMaxEven(arr);
            break;
        case 4:
            findMinOdd(arr);
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}