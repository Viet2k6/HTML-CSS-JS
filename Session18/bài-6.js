let year = +prompt("Mời nhập năm: ");

if (year < 0 || isNaN(year)) {
    alert("Năm nhập không hợp lệ");
} else if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    alert("Đây là năm nhuận");
} else {
    alert("Đây không phải là năm nhuận");
}