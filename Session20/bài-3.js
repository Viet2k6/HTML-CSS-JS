let str = prompt("Nhập một số nguyên");
if (isNaN(str)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (str === reverse) {
        alert(`${str} là số đối xứng`);
    } else {
        alert(`${str} không phải là số đối xứng`);
    }
}


