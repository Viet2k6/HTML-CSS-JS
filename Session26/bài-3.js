function inputStr() {
    let n = +prompt("Mời nhập số lượng email muốn thêm: ");
    let arr = [];
    for (let i = 0; i < n; i++) {
        let str = prompt("Mời nhập email thứ " + (i + 1) + ": ").trim();
        if (str.includes("@") && !str.includes(" ")) {
            arr.push(str);
        } else {
            alert("Dữ liệu không hợp lệ!");
        }
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử");
    }

    return arr;
}
let filteredArr = inputStr();
console.log(filteredArr);