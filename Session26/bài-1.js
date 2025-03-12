let arr = [];
let check = true;

for (let i = 0; i < 10; i++) {
    let n = +prompt("Mời nhập phần tử: ");
    if (isNaN(n)) {
        check = false;
    }
    arr.push(n);
}
if (arr.length === 0) {
    console.log("Mảng không có phần tử");
} else if (!check) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let newArr = arr.filter(function (element) {
        return element >= 10;
    });
    if (newArr.length === 0) {
        console.log("Mảng không có phần tử thỏa mãn");
    } else {
        for (let i = 0; i < newArr.length; i++) {
            console.log(newArr[i]);
        }
    }
}