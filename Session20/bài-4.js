let str = prompt(`Nhập vào một chuỗi`);
let search = prompt(`Nhập phần tử cần tìm`);
let found = false; 
for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        found = true;
        break; 
    }
}

if (found) {
    alert(`Tồn tại phần tử cần tìm kiếm`);
} else {
    alert(`Không tồn tại phần tử cần tìm kiếm`);
}