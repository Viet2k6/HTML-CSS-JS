let sum = 0;
for (let check = 0; check < 5; check++) {
    let num = +prompt(`Mời nhập số:`);
    while (isNaN(num)) {
        num = +prompt(`Giá trị không hợp lệ! Vui lòng nhập lại:`);
    }
    if (num % 2 !== 0) {
        sum += num;
    }
}
alert(`Tổng các số lẻ đã nhập: ${sum}`);


