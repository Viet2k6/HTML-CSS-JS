function inputStr() {
    let n = +prompt("Mời nhập số chuỗi muốn thêm: ");
    let arr = [];
    for (let i = 0; i < n; i++) {
        let str = prompt("Mời nhập chuỗi thứ " + (i + 1) + ": ");
        if (str.length > 5) {
            arr.push(str); 
        } else {
            alert("Chuỗi thứ " + (i + 1) + "không hợp lệ.");
        }
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử hợp lệ.");
    }
    return arr;
}
let filteredArr = inputStr();
console.log(filteredArr);